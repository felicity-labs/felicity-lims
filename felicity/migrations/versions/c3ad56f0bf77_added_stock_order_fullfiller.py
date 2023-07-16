"""added stock order fullfiller

Revision ID: c3ad56f0bf77
Revises: 56c47ebb220c
Create Date: 2023-07-16 15:51:52.161687

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'c3ad56f0bf77'
down_revision = '56c47ebb220c'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('stockorder', sa.Column('fullfilled_by_uid', sa.String(), nullable=True))
    op.create_foreign_key(None, 'stockorder', 'user', ['fullfilled_by_uid'], ['uid'])
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_constraint(None, 'stockorder', type_='foreignkey')
    op.drop_column('stockorder', 'fullfilled_by_uid')
    # ### end Alembic commands ###
