"""added keyword default to name 2

Revision ID: e15adddb70ee
Revises: d69df6d3b2af
Create Date: 2021-11-07 07:58:30.311538

"""
from alembic import op
import sqlalchemy as sa
import sqlmodel


# revision identifiers, used by Alembic.
revision = 'e15adddb70ee'
down_revision = 'd69df6d3b2af'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.alter_column('group', 'keyword',
               existing_type=sa.VARCHAR(),
               nullable=False)
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.alter_column('group', 'keyword',
               existing_type=sa.VARCHAR(),
               nullable=True)
    # ### end Alembic commands ###