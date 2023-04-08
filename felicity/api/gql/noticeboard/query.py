from typing import List, Optional

import strawberry  # noqa

from felicity.api.gql.noticeboard.types import NoticeType
from felicity.apps.noticeboard import models
from felicity.core.uid_gen import FelicityID


@strawberry.type
class NoticeQuery:
    @strawberry.field
    async def notice_by_uid(self, info, uid: FelicityID) -> Optional[NoticeType]:
        return await models.Notice.get(uid=uid)

    @strawberry.field
    async def notices_by_creator(
        self, info, uid: FelicityID
    ) -> Optional[List[NoticeType]]:
        return await models.Notice.get_all(created_by_uid=uid)

    @strawberry.field
    async def notice_filter(
        self,
        info,
        group_uid: Optional[FelicityID],
        department_uid: Optional[FelicityID],
    ) -> List[NoticeType]:
        filters = {}

        if group_uid:
            filters["groups__uid__in"] = [group_uid]

        if department_uid:
            filters["departments__uid__in"] = [department_uid]

        notice_stmt = models.Notice.smart_query(
            filters=filters, sort_attrs=["-created_at"]
        )

        notices = (await models.Notice.session.execute(notice_stmt)).scalars().all()
        return list(notices)