"""added bill transaction notes

Revision ID: 948a829e0626
Revises: 026a8b0275fc
Create Date: 2023-11-30 22:50:03.762093

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '948a829e0626'
down_revision = '026a8b0275fc'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('laboratory_setting', sa.Column('allow_billing', sa.Boolean(), nullable=True))
    op.add_column('laboratory_setting', sa.Column('currency', sa.String(), nullable=True))
    op.add_column('test_bill_transaction', sa.Column('notes', sa.String(), nullable=False))
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('test_bill_transaction', 'notes')
    op.drop_column('laboratory_setting', 'currency')
    op.drop_column('laboratory_setting', 'allow_billing')
    # ### end Alembic commands ###
