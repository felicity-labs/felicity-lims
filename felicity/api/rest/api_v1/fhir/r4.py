import json
from typing import Annotated

from fastapi import APIRouter, Depends, HTTPException, Request

from felicity.api.deps import get_current_user
from felicity.apps.iol.fhir.schema import (
    BundleResource,
    DiagnosticReportResource,
    PatientResource,
    ServiceRequestResource,
)
from felicity.apps.iol.fhir.utils import (
    create_resource,
    get_diagnostic_report_resource,
    get_patient_resource,
)
from felicity.apps.user.schemas import User
from felicity.apps.user.services import UserService

fhir_v4 = APIRouter(tags=["fhir-v4"], prefix="/fhir")


@fhir_v4.post("/{resource_type}")
async def add_resource(
    request: Request,
    resource_type: str,
    user_service: Annotated[UserService, Depends(UserService)],
    current_user: Annotated[User, Depends(get_current_user)],
):
    """
    Add a fhir resource
    Supported Resources are Bundle, ServiceRequest and Patient
    """
    user = await user_service.get_by_username(current_user.user_name)
    data = json.loads(await request.json())

    resources = {
        "Bundle": BundleResource,
        "DiagnosticReport": DiagnosticReportResource,
        "ServiceRequest": ServiceRequestResource,
        "Patient": PatientResource,
    }
    if resource_type not in resources:
        raise HTTPException(417, f"{resource_type} Resource not supported")

    mapped_data = resources[resource_type](**data)
    return await create_resource(resource_type, mapped_data, request, user)


@fhir_v4.get("/{resource}/{resource_id}")
async def get_resource(
    resource: str,
    resource_id: str,
    current_user: Annotated[User, Depends(get_current_user)],
):
    """
    Supported Resources are DiagnosticReport and  Patient

    - **resource_id** A Fhir Resource ID
    """
    if resource not in ["Patient", "DiagnosticReport"]:
        raise HTTPException(417, f"{resource} Resource not supported")

    item = None
    if resource == "Patient":
        item = await get_patient_resource(resource_id)

    if resource == "DiagnosticReport":
        item = await get_diagnostic_report_resource(resource_id)

    if not item:
        raise HTTPException(404, f"{resource} with id {resource_id} not found")
    return item
