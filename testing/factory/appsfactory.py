"""
Object factory for automated tests.

General usage:

def test_something(self):
    user = self.factory.make_user()
    request = self.factory.make_request(user)
    # Your assertions, etc...
"""
from django.contrib.auth.models import AnonymousUser
from django.http import HttpRequest, HttpResponse, QueryDict

from testing.factory.admin import UserFactory


class AppsFactory(object):

    def make_request(self, user=None, method='GET', data=None, headers=None):
        """Returns a Django HTTPReqeust for use in view tests."""
        request = HttpRequest()
        request.META = {
            'SERVER_NAME': 'automated-test-server',
            'SERVER_PORT': 80,
        }

        if headers:
            request.META.update(headers)

        if not user:
            user = AnonymousUser()
        request.user = user

        if not data:
            data = {}
        if type(data) == str:
            querystring = data
        else:
            querystring = '&'.join(['{0}={1}'.format(k, v) for k, v in data.items()])

        if method == 'GET':
            request.method = 'GET'
            request.GET = request.REQUEST = QueryDict(querystring)
        if method == 'POST':
            request.method = 'POST'
            request.POST = request.REQUEST = QueryDict(querystring)

        return request

    def set_signed_cookie(self, request, key, value):
        """Set a signed cookie on a request.

        Used HttpResponse's set_signed_cookie and sets the value on the
        request, as if you sent the cookie'd response and got another
        request back.

        Use this when testing views that consume signed cookies.
        """
        response = HttpResponse()
        response.set_signed_cookie(key, value)
        request.COOKIES[key] = response.cookies[key].value

    def set_signed_cookie_on_client(self, client, key, value):
        """Set a signed cookie on the test client."""
        response = HttpResponse()
        response.set_signed_cookie(key, value)
        client.cookies[key] = response.cookies[key].value

    def make_user(self, *args, **kwargs):
        """Returns a django.contrib.auth.models.User instance"""
        return UserFactory.create(*args, **kwargs)