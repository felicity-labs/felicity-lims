from datetime import datetime
from typing import Optional

import strawberry  # noqa
from api.gql.analysis.types.analysis import SampleType
from api.gql.types import BytesScalar, JSONScalar
from api.gql.user.types import UserType
from core.uid_gen import FelicityID


@strawberry.type
class ReportImpressType:
    uid: FelicityID
    state: str | None
    sample_uid: FelicityID | None
    sample: Optional[SampleType]
    json_content: Optional[JSONScalar]
    pdf_content: Optional[BytesScalar]
    email_required: bool| None
    email_sent: bool| None
    sms_required: bool| None
    sms_sent: bool| None
    generated_by_uid: FelicityID | None
    generated_by: UserType | None
    created_by_uid: FelicityID | None
    created_by: UserType | None
    updated_by_uid: FelicityID | None
    updated_by: UserType | None
    date_generated: datetime | None
