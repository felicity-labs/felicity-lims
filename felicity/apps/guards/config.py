from enum import StrEnum, auto


class Role(StrEnum):
    ADMINISTRATOR: auto()
    LAB_MANAGER = "LAB_MANAGER"
    SCIENTIST = "SCIENTIST"
    TECHNOLOGIST = "TECHNOLOGIST"
    LAB_HAND = "LABORATORY HAND"
    GUEST = "GUEST"
    STORES = "STORES"
    ACCOUNTING = "ACCOUNTING"


class Resource(StrEnum):
    ANALYTICS = "ANALYTICS"
    CLIENT = "CLIENT"
    PATIENT = "PATIENT"
    SAMPLE = "SAMPLE"
    RESULT = "RESULT"
    WORKSHEET = "WORKSHEET"
    PRODUCT = "PRODUCT"
    SHIPMENT = "SHIPMENT"
    STORAGE = "STORAGE"
    NOTICE = "NOTICE"
    BILLING = "BILLING"


class Access(StrEnum):
    CREATE = "CREATE"
    READ = "READ"
    UPDATE = "UPDATE"
    DELETE = "DELETE"
    SUBMIT = "SUBMIT"
    VERIFY = "VERIFY"
    CANCEL = "CANCEL"
    INVALIDATE = "INVALIDATE"
    REJECT = "REJECT"
    RETEST = "RETEST"
    ORDER = "ORDER"
    ISSUE = "ISSUE"
