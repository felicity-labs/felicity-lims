"""rnamed shipped sample

Revision ID: 27611e47eb3d
Revises: 6b56c3f30498
Create Date: 2023-05-17 17:24:58.349665

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '27611e47eb3d'
down_revision = '6b56c3f30498'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('shippedsample',
    sa.Column('sample_uid', sa.String(), nullable=True),
    sa.Column('shipment_uid', sa.String(), nullable=True),
    sa.Column('uid', sa.String(), nullable=False),
    sa.ForeignKeyConstraint(['sample_uid'], ['sample.uid'], ),
    sa.ForeignKeyConstraint(['shipment_uid'], ['shipment.uid'], ),
    sa.PrimaryKeyConstraint('uid')
    )
    op.create_index(op.f('ix_shippedsample_uid'), 'shippedsample', ['uid'], unique=False)
    op.drop_index('ix_shipedsample_uid', table_name='shipedsample')
    op.drop_table('shipedsample')
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('shipedsample',
    sa.Column('sample_uid', sa.VARCHAR(), autoincrement=False, nullable=True),
    sa.Column('shipment_uid', sa.VARCHAR(), autoincrement=False, nullable=True),
    sa.Column('uid', sa.VARCHAR(), autoincrement=False, nullable=False),
    sa.ForeignKeyConstraint(['sample_uid'], ['sample.uid'], name='shipedsample_sample_uid_fkey'),
    sa.ForeignKeyConstraint(['shipment_uid'], ['shipment.uid'], name='shipedsample_shipment_uid_fkey'),
    sa.PrimaryKeyConstraint('uid', name='shipedsample_pkey')
    )
    op.create_index('ix_shipedsample_uid', 'shipedsample', ['uid'], unique=False)
    op.drop_index(op.f('ix_shippedsample_uid'), table_name='shippedsample')
    op.drop_table('shippedsample')
    # ### end Alembic commands ###
