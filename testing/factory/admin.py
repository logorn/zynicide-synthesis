import datetime

import factory
from factory import fuzzy
import pytz

from django.contrib.auth import get_user_model


class UserFactory(factory.django.DjangoModelFactory):
    username = factory.Sequence(lambda n: 'user_{}'.format(n))
    email = factory.Sequence(lambda n: 'user_{}@example.com'.format(n))
    password = factory.PostGenerationMethodCall('set_password', 'password')
    first_name = factory.Faker('first_name')
    last_name = factory.Faker('last_name')
    is_active = True
    is_staff = False
    is_superuser = False
    last_login = fuzzy.FuzzyDateTime(datetime.datetime(2016, 1, 1, 0, 0, 0, tzinfo=pytz.utc))
    date_joined = fuzzy.FuzzyDateTime(datetime.datetime(2016, 1, 1, 0, 0, 0, tzinfo=pytz.utc))

    class Meta:
        model = get_user_model()
        django_get_or_create = ('email', 'username')
