from datetime import datetime
from typing import List, Optional

import strawberry  # noqa
from api.gql import PageInfo
from api.gql.analysis.types.analysis import (
    AnalysisType,
    QCLevelType,
    QCTemplateType,
    SampleTypeTyp,
)
from api.gql.analysis.types.results import AnalysisResultType
from api.gql.setup.types import InstrumentType
from api.gql.types import JSONScalar
from api.gql.user.types import UserType
from core.uid_gen import FelicityID


@strawberry.type
class WorkSheetTemplateType:
    uid: FelicityID
    worksheet_type: str
    reserved: Optional[JSONScalar]
    number_of_samples: Optional[int]
    rows: Optional[int]
    cols: Optional[int]
    row_wise: bool
    state: Optional[str]
    name: str
    description: Optional[str]
    analysis_uid: Optional[FelicityID]
    analysis: Optional[AnalysisType]
    qc_template_uid: Optional[FelicityID]
    qc_template: Optional[QCTemplateType]
    qc_levels: Optional[List[QCLevelType]]
    instrument_uid: Optional[FelicityID]
    instrument: Optional[InstrumentType]
    sample_type_uid: Optional[FelicityID]
    sample_type: Optional[SampleTypeTyp]
    created_by_uid: Optional[FelicityID]
    created_by: Optional[UserType]
    created_at: Optional[datetime]
    updated_by_uid: Optional[FelicityID]
    updated_by: Optional[UserType]
    updated_at: Optional[datetime]


@strawberry.type
class WorkSheetType:
    uid: FelicityID
    worksheet_type: str
    reserved: Optional[JSONScalar]
    number_of_samples: Optional[int]
    rows: Optional[int]
    cols: Optional[int]
    row_wise: bool
    state: Optional[str]
    template_uid: Optional[FelicityID]
    template: Optional[WorkSheetTemplateType]
    analyst_uid: Optional[FelicityID]
    analyst: Optional[UserType]
    worksheet_id: str
    analysis_uid: Optional[FelicityID]
    analysis: Optional[AnalysisType]
    instrument_uid: Optional[FelicityID]
    instrument: Optional[InstrumentType]
    sample_type_uid: Optional[FelicityID]
    sample_type: Optional[SampleTypeTyp]
    assigned_count: int
    analysis_results: Optional[List[AnalysisResultType]]
    submitted_by_uid: Optional[FelicityID]
    submitted_by: Optional[UserType]
    date_submitted: Optional[datetime]
    verified_by_uid: Optional[FelicityID]
    verified_by: Optional[UserType]
    date_verified: Optional[datetime]
    created_by_uid: Optional[FelicityID]
    created_by: Optional[UserType]
    created_at: Optional[datetime]
    updated_by_uid: Optional[FelicityID]
    updated_by: Optional[UserType]
    updated_at: Optional[datetime]


#  relay paginations
@strawberry.type
class WorkSheetEdge:
    cursor: str
    node: WorkSheetType


@strawberry.type
class WorkSheetCursorPage:
    page_info: PageInfo
    edges: Optional[List[WorkSheetEdge]]
    items: Optional[List[WorkSheetType]]
    total_count: int
