from django.conf.urls import url

from promotion import views


app_name = 'promotion'
urlpatterns = [
	url(r'^$', views.promotion, name='promotion'),
	url(r'^context/$', views.context, name='context')
]