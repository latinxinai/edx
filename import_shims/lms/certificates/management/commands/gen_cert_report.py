"""Deprecated import support. Auto-generated by import_shims/generate_shims.sh."""
# pylint: disable=redefined-builtin,wrong-import-position,wildcard-import,useless-suppression,line-too-long

from import_shims.warn import warn_deprecated_import

warn_deprecated_import('certificates.management.commands.gen_cert_report', 'lms.djangoapps.certificates.management.commands.gen_cert_report')

from lms.djangoapps.certificates.management.commands.gen_cert_report import *
