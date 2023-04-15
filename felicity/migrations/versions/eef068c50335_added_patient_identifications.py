"""added patient identifications

Revision ID: eef068c50335
Revises: b38399a0a7d4
Create Date: 2023-04-09 13:12:40.396991

"""
import sqlalchemy as sa
from alembic import op

# revision identifiers, used by Alembic.
revision = "eef068c50335"
down_revision = "b38399a0a7d4"
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table(
        "identification",
        sa.Column("uid", sa.String(), nullable=False),
        sa.Column("name", sa.String(), nullable=True),
        sa.Column("created_at", sa.DateTime(), nullable=True),
        sa.Column("created_by_uid", sa.String(), nullable=True),
        sa.Column("updated_at", sa.DateTime(), nullable=True),
        sa.Column("updated_by_uid", sa.String(), nullable=True),
        sa.ForeignKeyConstraint(
            ["created_by_uid"],
            ["user.uid"],
        ),
        sa.ForeignKeyConstraint(
            ["updated_by_uid"],
            ["user.uid"],
        ),
        sa.PrimaryKeyConstraint("uid"),
    )
    op.create_index(
        op.f("ix_identification_name"), "identification", ["name"], unique=True
    )
    op.create_index(
        op.f("ix_identification_uid"), "identification", ["uid"], unique=False
    )
    op.create_table(
        "patient_identification",
        sa.Column("identification_uid", sa.String(), nullable=False),
        sa.Column("patient_uid", sa.String(), nullable=False),
        sa.ForeignKeyConstraint(
            ["identification_uid"],
            ["identification.uid"],
        ),
        sa.ForeignKeyConstraint(
            ["patient_uid"],
            ["patient.uid"],
        ),
        sa.PrimaryKeyConstraint("identification_uid", "patient_uid"),
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table("patient_identification")
    op.drop_index(op.f("ix_identification_uid"), table_name="identification")
    op.drop_index(op.f("ix_identification_name"), table_name="identification")
    op.drop_table("identification")
    # ### end Alembic commands ###