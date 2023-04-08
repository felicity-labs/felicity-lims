from typing import Dict, List, Optional

from pydantic import BaseModel

from felicity.apps.analysis.schemas import AnalysisBaseInDB, QCLevelInDB
from felicity.core.uid_gen import FelicityIDType

#
# WorkSheet Schemas
#

# Shared properties
class WorkSheetBase(BaseModel):
    analyst_uid: Optional[FelicityIDType] = None
    template_uid: Optional[FelicityIDType] = None
    worksheet_id: Optional[str] = None
    instrument_uid: Optional[FelicityIDType] = None
    sample_type_uid: Optional[FelicityIDType] = None
    analysis_uid: Optional[FelicityIDType] = None
    analysis: Optional[AnalysisBaseInDB] = None
    reserved: Optional[Dict] = {}
    number_of_samples: Optional[int] = None
    worksheet_type: Optional[int] = 0
    rows: Optional[int] = None
    cols: Optional[int] = None
    row_wise: Optional[bool] = True
    template: Optional[Dict] = {}
    state: Optional[str] = None


class WorkSheetBaseInDB(WorkSheetBase):
    uid: Optional[FelicityIDType] = None

    class Config:
        orm_mode = True


# Properties to receive via API on creation
class WorkSheetCreate(WorkSheetBase):
    pass


# Properties to receive via API on update
class WorkSheetUpdate(WorkSheetBase):
    pass


# Properties to return via API
class WorkSheet(WorkSheetBaseInDB):
    pass


# Properties stored in DB
class WorkSheetInDB(WorkSheetBaseInDB):
    pass


#
# WSTemplate Schemas
#

# Shared properties
class WSTemplateBase(BaseModel):
    name: Optional[str] = None
    description: Optional[str] = None
    instrument_uid: Optional[FelicityIDType] = None
    sample_type_uid: Optional[FelicityIDType] = None
    analysis_uid: Optional[FelicityIDType] = None
    analysis: Optional[AnalysisBaseInDB] = None
    qc_analyses: Optional[List[AnalysisBaseInDB]] = []
    qc_levels: Optional[List[QCLevelInDB]] = []
    reserved: Optional[Dict] = {}
    number_of_samples: Optional[int] = None
    worksheet_type: Optional[str] = "flat"
    rows: Optional[int] = None
    cols: Optional[int] = None
    row_wise: Optional[bool] = True


class WSTemplateBaseInDB(WSTemplateBase):
    uid: Optional[FelicityIDType] = None

    class Config:
        orm_mode = True


# Properties to receive via API on creation
class WSTemplateCreate(WSTemplateBase):
    pass


# Properties to receive via API on update
class WSTemplateUpdate(WSTemplateBase):
    pass


# Properties to return via API
class WSTemplate(WSTemplateBaseInDB):
    pass


# Properties stored in DB
class WSTemplateInDB(WSTemplateBaseInDB):
    pass