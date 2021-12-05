"""added mesage thread model to replace thread_uuid

Revision ID: a2c49e3623a0
Revises: 0c406729a002
Create Date: 2021-12-05 12:13:53.804016

"""
from alembic import op
import sqlalchemy as sa
import sqlmodel


# revision identifiers, used by Alembic.
revision = 'a2c49e3623a0'
down_revision = '0c406729a002'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('messagethread',
    sa.Column('created_at', sa.TIMESTAMP(), nullable=False),
    sa.Column('updated_at', sa.TIMESTAMP(), nullable=False),
    sa.Column('uid', sa.Integer(), autoincrement=True, nullable=False),
    sa.Column('broadcast', sa.Boolean(), nullable=False),
    sa.Column('created_by_uid', sa.Integer(), nullable=True),
    sa.Column('updated_by_uid', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['created_by_uid'], ['user.uid'], ),
    sa.ForeignKeyConstraint(['updated_by_uid'], ['user.uid'], ),
    sa.PrimaryKeyConstraint('uid')
    )
    op.create_index(op.f('ix_messagethread_uid'), 'messagethread', ['uid'], unique=False)
    op.add_column('message', sa.Column('thread_uid', sa.Integer(), nullable=True))
    op.create_foreign_key(None, 'message', 'messagethread', ['thread_uid'], ['uid'])
    op.drop_column('message', 'thread_uuid')
    op.drop_column('message', 'subject')
    op.drop_column('message', 'broadcast')
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('message', sa.Column('broadcast', sa.BOOLEAN(), autoincrement=False, nullable=False))
    op.add_column('message', sa.Column('subject', sa.VARCHAR(), autoincrement=False, nullable=False))
    op.add_column('message', sa.Column('thread_uuid', sa.VARCHAR(), autoincrement=False, nullable=False))
    op.drop_constraint(None, 'message', type_='foreignkey')
    op.drop_column('message', 'thread_uid')
    op.drop_index(op.f('ix_messagethread_uid'), table_name='messagethread')
    op.drop_table('messagethread')
    # ### end Alembic commands ###
