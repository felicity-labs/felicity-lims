"""added-metadata-snapshots

Revision ID: cccb8d8adce5
Revises: 9d42a09f0754
Create Date: 2024-11-17 22:52:15.907709

"""
import sqlalchemy as sa
from alembic import op
from sqlalchemy.dialects import postgresql

# revision identifiers, used by Alembic.
revision = 'cccb8d8adce5'
down_revision = '9d42a09f0754'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('analysis_result',
                  sa.Column('metadata_snapshot', postgresql.JSONB(astext_type=sa.Text()), nullable=False,
                            server_default=sa.text("'{}'::jsonb")))
    op.add_column('qc_reference',
                  sa.Column('metadata_snapshot', postgresql.JSONB(astext_type=sa.Text()), nullable=False,
                            server_default=sa.text("'{}'::jsonb")))
    op.add_column('sample',
                  sa.Column('metadata_snapshot', postgresql.JSONB(astext_type=sa.Text()), nullable=False,
                            server_default=sa.text("'{}'::jsonb")))
    op.add_column('analysis_request',
                  sa.Column('metadata_snapshot', postgresql.JSONB(astext_type=sa.Text()), nullable=False,
                            server_default=sa.text("'{}'::jsonb")))
    op.add_column('patient',
                  sa.Column('metadata_snapshot', postgresql.JSONB(astext_type=sa.Text()), nullable=False,
                            server_default=sa.text("'{}'::jsonb")))
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('sample', 'metadata_snapshot')
    op.drop_column('qc_reference', 'metadata_snapshot')
    op.drop_column('analysis_result', 'metadata_snapshot')
    op.drop_column('patient', 'metadata_snapshot')
    op.drop_column('analysis_request', 'metadata_snapshot')
    # ### end Alembic commands ###
