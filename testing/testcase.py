from django import test

from testing.factory import AppsFactory


class TestCase(test.TestCase):
    """Custom TestCase that sets up the factory and any other utilities."""

    def setUp(self):
        super(TestCase, self).setUp()
        self.factory = AppsFactory()

    def login_user(self, user):
        """Log the given user into self.client."""
        is_logged_in = self.client.login(
            username=user.username, password='password')
        self.assertTrue(
            is_logged_in, 'login_user failed for user {}'.format(user.username))
