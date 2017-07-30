import os
environment = os.environ.get('ZYNICIDE_SETTINGS', 'development')

from .common import *  # NOQA
from .secret import *  # NOQA
exec 'from .{} import *'.format(environment)
