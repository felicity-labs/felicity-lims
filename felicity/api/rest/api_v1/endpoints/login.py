from datetime import timedelta
from typing import Any

from api.rest import deps
from apps.common import schemas as core_schemas
from apps.user import models, schemas
from core import security
from core.config import settings
from core.security import (
    generate_password_reset_token,
    get_password_hash,
    verify_password_reset_token,
)
from fastapi import APIRouter, Body, Depends, HTTPException
from fastapi.security import OAuth2PasswordRequestForm
from utils.email.email import send_reset_password_email

router = APIRouter()


@router.post("/access-token", response_model=core_schemas.Token)
async def login_access_token(form_data: OAuth2PasswordRequestForm = Depends()) -> Any:
    """
    OAuth2 compatible token login, get an access token for future requests
    """
    auth = await models.UserAuth.authenticate(
        self=models.UserAuth, username=form_data.username, password=form_data.password
    )
    if not auth:
        raise HTTPException(status_code=400, detail="Incorrect username or password")
    else:
        user = await models.User.get(auth_uid=auth.uid)
        if not user or not user.is_active:
            raise HTTPException(status_code=400, detail="Inactive user")
    access_token_expires = timedelta(minutes=settings.ACCESS_TOKEN_EXPIRE_MINUTES)
    return {
        "access_token": security.create_access_token(
            user.uid, expires_delta=access_token_expires
        ),
        "token_type": "bearer",
    }


@router.post("/test-token", response_model=schemas.User)
def me(current_user: models.User = Depends(deps.get_current_user)) -> Any:
    """
    Test access token
    """
    return current_user


@router.post("/password-recovery/{email}", response_model=core_schemas.Msg)
async def recover_password(email: str, 
    current_user: models.User = Depends(deps.get_current_active_user),) -> Any:
    """
    Password Recovery
    """
    user = await models.User.get_by_email(email=email)

    if not user:
        raise HTTPException(
            status_code=404,
            detail="The user with this username does not exist in the system.",
        )
    password_reset_token = generate_password_reset_token(email=email)
    send_reset_password_email(
        email_to=user.email, email=email, token=password_reset_token
    )
    return {"msg": "Password recovery email sent"}


@router.post("/reset-password", response_model=core_schemas.Msg)
async def reset_password(token: str = Body(...), new_password: str = Body(...), 
    current_user: models.User = Depends(deps.get_current_active_user),) -> Any:
    """
    Reset password
    """
    user_id = verify_password_reset_token(token)
    if not user_id:
        raise HTTPException(status_code=400, detail="Invalid token")
    user = await models.User.get(uid=user_id)
    if not user:
        raise HTTPException(
            status_code=404,
            detail="The user with this username does not exist in the system.",
        )
    elif not user.is_active:
        raise HTTPException(status_code=400, detail="Inactive user")
    hashed_password = get_password_hash(new_password)
    user.hashed_password = hashed_password
    await user.save()
    return {"msg": "Password updated successfully"}
