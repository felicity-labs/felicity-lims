from typing import List, Optional
from datetime import datetime
import strawberry  # noqa
from felicity.api.gql import PageInfo
from felicity.api.gql.user.types import UserType


@strawberry.type
class LaboratoryType:
    uid: int
    setup_name: str
    lab_name: str
    lab_manager_uid: Optional[str]
    # lab_manager = relationship(User, backref="lab_manager")
    email: Optional[str]
    email_cc: Optional[str]
    mobile_phone: Optional[str]
    business_phone: Optional[str]
    #
    created_by_uid: Optional[int]
    created_by: Optional['UserType']
    created_at: Optional[datetime]
    updated_by_uid: Optional[int]
    updated_by: Optional['UserType']
    updated_at: Optional[datetime]


@strawberry.type
class SupplierType:
    uid: int
    name: Optional[str]
    description: Optional[str]


@strawberry.type
class ManufacturerType:
    uid: int
    name: Optional[str]
    description: Optional[str]


@strawberry.type
class InstrumentTypeType:
    uid: int
    name: Optional[str]
    description: Optional[str]


@strawberry.type
class UnitType:
    uid: int
    name: str
    is_si_unit: bool


@strawberry.type
class InstrumentType:
    uid: int
    name: Optional[str]
    description: Optional[str]
    keyword: Optional[str]
    supplier_uid: Optional[int]
    supplier: Optional[SupplierType]
    methods: Optional[List["MethodType"]]
    #
    created_by_uid: Optional[int]
    created_by: Optional['UserType']
    created_at: Optional[datetime]
    updated_by_uid: Optional[int]
    updated_by: Optional['UserType']
    updated_at: Optional[datetime]


#  relay paginations
@strawberry.type
class InstrumentEdge:
    cursor: str
    node: InstrumentType


@strawberry.type
class InstrumentCursorPage:
    page_info: PageInfo
    edges: Optional[List[InstrumentEdge]]
    items: Optional[List[InstrumentType]]
    total_count: int


@strawberry.type
class InstrumentCalibrationType:
    uid: int
    instrument_uid: int
    instrument: Optional[InstrumentType]
    calibration_id: str
    date_reported: datetime
    report_id: str
    performed_by: str
    start_date: datetime
    end_date: datetime
    notes_before: str
    work_done: str
    remarks: str


@strawberry.type
class CalibrationCertificateType:
    uid: int
    instrument_uid: int
    instrument: Optional[InstrumentType]
    certificate_code: str
    internal: bool
    issuer: str
    date_issued: datetime
    valid_from_date: datetime
    valid_to_date: datetime
    performed_by: str
    approved_by: str
    remarks: str


@strawberry.type
class DepartmentType:
    uid: int
    name: Optional[str]
    description: Optional[str]
    code: Optional[str]
    #
    created_by_uid: Optional[int]
    created_by: Optional['UserType']
    created_at: Optional[datetime]
    updated_by_uid: Optional[int]
    updated_by: Optional['UserType']
    updated_at: Optional[datetime]


@strawberry.type
class MethodType:
    uid: int
    name: Optional[str]
    description: Optional[str]
    keyword: Optional[str]
    instruments: Optional[List[InstrumentType]]
    #
    created_by_uid: Optional[int]
    created_by: Optional['UserType']
    created_at: Optional[datetime]
    updated_by_uid: Optional[int]
    updated_by: Optional['UserType']
    updated_at: Optional[datetime]


#  relay paginations
@strawberry.type
class MethodEdge:
    cursor: str
    node: MethodType


@strawberry.type
class MethodCursorPage:
    page_info: PageInfo
    edges: Optional[List[MethodEdge]]
    items: Optional[List[MethodType]]
    total_count: int


@strawberry.type
class CountryType:
    uid: int
    name: Optional[str]
    code: Optional[str]
    active: Optional[str]
    #
    created_by_uid: Optional[int]
    created_by: Optional['UserType']
    created_at: Optional[datetime]
    updated_by_uid: Optional[int]
    updated_by: Optional['UserType']
    updated_at: Optional[datetime]


@strawberry.type
class ProvinceType:
    uid: int
    code: Optional[str]
    name: Optional[str]
    email: Optional[str]
    email_cc: Optional[str]
    mobile_phone: Optional[str]
    business_phone: Optional[str]
    active: Optional[bool]
    country_uid: Optional[int]
    country: Optional[CountryType]
    #
    created_by_uid: Optional[int]
    created_by: Optional['UserType']
    created_at: Optional[datetime]
    updated_by_uid: Optional[int]
    updated_by: Optional['UserType']
    updated_at: Optional[datetime]


#  relay paginations
@strawberry.type
class ProvinceEdge:
    cursor: str
    node: ProvinceType


@strawberry.type
class ProvinceCursorPage:
    page_info: PageInfo
    edges: Optional[List[ProvinceEdge]]
    items: Optional[List[ProvinceType]]
    total_count: int


@strawberry.type
class DistrictType:
    uid: int
    code: Optional[str]
    name: Optional[str]
    email: Optional[str]
    email_cc: Optional[str]
    mobile_phone: Optional[str]
    business_phone: Optional[str]
    active: Optional[bool]
    province_uid: Optional[int]
    province: Optional[ProvinceType]
    #
    created_by_uid: Optional[int]
    created_by: Optional['UserType']
    created_at: Optional[datetime]
    updated_by_uid: Optional[int]
    updated_by: Optional['UserType']
    updated_at: Optional[datetime]


#  relay paginations
@strawberry.type
class DistrictEdge:
    cursor: str
    node: DistrictType


@strawberry.type
class DistrictCursorPage:
    page_info: PageInfo
    edges: Optional[List[DistrictEdge]]
    items: Optional[List[DistrictType]]
    total_count: int
