import unittest

from unittest import mock
from domain.user.schemas import User
from domain.user.ports.repository import IUserRepository
from domain.exceptions import NotAllowedError, AlreadyExistsError, ValidationError
from domain.user.services import UserService


class UserServiceTestCase(unittest.IsolatedAsyncioTestCase):
    async def asyncSetUp(self):
        self.repository = mock.create_autospec(IUserRepository)
        self.group_service = mock.AsyncMock()
        self.permission_service = mock.AsyncMock()
        self.user_preference_service = mock.AsyncMock()

        self.user_service = UserService(
            self.repository,
            self.user_preference_service,
            self.group_service,
            self.permission_service,
        )

        self.user_data = {
            "first_name": "anesu",
            "last_name": "mpofu",
            "email": "amusewem@gmail.com",
            "user_name": "amusem",
            "password": "!Try#@8787?",
            "passwordc": "!Try#@8787?",
            "open_reg": False,
        }

    async def test_add_user(self):
        uid = "111"
        self.repository.get.return_value = None
        self.repository.create.return_value = mock.AsyncMock(
            return_value=User(**{"uid": uid, **self.user_data})
        )
        result = await self.user_service.add_user(**self.user_data)
        self.repository.get.assert_called_once_with(email=self.user_data["email"])
        self.repository.create.assert_called_once()
        self.assertIsNotNone(result.return_value.uid)
        self.assertEqual(result.return_value.uid, uid)
        self.assertEqual(result.return_value.first_name, self.user_data["first_name"])

    async def test_add_user_open_reg_not_allowed(self):
        with self.assertRaises(NotAllowedError):
            await self.user_service.add_user(**{**self.user_data, "open_reg": True})

    async def test_add_user_email_already_exists(self):
        self.repository.get.return_value = User(**self.user_data)
        with self.assertRaises(AlreadyExistsError):
            await self.user_service.add_user(**self.user_data)

    async def test_add_user_password_policy_weak(self):
        self.repository.get.return_value = None
        with self.assertRaises(ValidationError):
            await self.user_service.add_user(
                **{
                    **self.user_data,
                    "password": "12345",
                    "passwordc": "12345",
                }
            )

    async def test_add_user_password_mismatch(self):
        self.repository.get.return_value = None
        with self.assertRaises(ValidationError):
            await self.user_service.add_user(
                **{
                    **self.user_data,
                    "password": "!Am65$#@1u",
                    "passwordc": "!Am65$#@iu",
                }
            )
