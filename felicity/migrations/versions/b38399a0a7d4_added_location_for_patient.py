"""added location for patient

Revision ID: b38399a0a7d4
Revises: 58c0c553f0fd
Create Date: 2023-04-09 09:43:37.126410

"""
import sqlalchemy as sa
from alembic import op

# revision identifiers, used by Alembic.
revision = "b38399a0a7d4"
down_revision = "58c0c553f0fd"
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column("patient", sa.Column("district_uid", sa.String(), nullable=True))
    op.add_column("patient", sa.Column("province_uid", sa.String(), nullable=True))
    op.add_column("patient", sa.Column("country_uid", sa.String(), nullable=True))
    op.create_foreign_key(None, "patient", "country", ["country_uid"], ["uid"])
    op.create_foreign_key(None, "patient", "province", ["province_uid"], ["uid"])
    op.create_foreign_key(None, "patient", "district", ["district_uid"], ["uid"])
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_constraint(None, "patient", type_="foreignkey")
    op.drop_constraint(None, "patient", type_="foreignkey")
    op.drop_constraint(None, "patient", type_="foreignkey")
    op.drop_column("patient", "country_uid")
    op.drop_column("patient", "province_uid")
    op.drop_column("patient", "district_uid")
    # ### end Alembic commands ###
