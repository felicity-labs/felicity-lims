"""added reportable, internal use and sort key

Revision ID: 27a65413f177
Revises: 8f6bbe151856
Create Date: 2021-05-30 10:45:41.076873

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '27a65413f177'
down_revision = '8f6bbe151856'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('analysis', sa.Column('sort_key', sa.Integer(), nullable=True))
    op.add_column('analysisrequest', sa.Column('internal_use', sa.Boolean(), nullable=True))
    op.add_column('analysisresult', sa.Column('reportable', sa.Boolean(), nullable=True))
    op.add_column('client', sa.Column('internal_use', sa.Boolean(), nullable=True))
    op.add_column('patient', sa.Column('internal_use', sa.Boolean(), nullable=True))
    op.add_column('sample', sa.Column('internal_use', sa.Boolean(), nullable=True))
    op.alter_column('sample', 'sampletype_uid',
               existing_type=sa.INTEGER(),
               nullable=False)
    op.add_column('sampletype', sa.Column('internal_use', sa.Boolean(), nullable=True))
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('sampletype', 'internal_use')
    op.alter_column('sample', 'sampletype_uid',
               existing_type=sa.INTEGER(),
               nullable=True)
    op.drop_column('sample', 'internal_use')
    op.drop_column('patient', 'internal_use')
    op.drop_column('client', 'internal_use')
    op.drop_column('analysisresult', 'reportable')
    op.drop_column('analysisrequest', 'internal_use')
    op.drop_column('analysis', 'sort_key')
    # ### end Alembic commands ###
