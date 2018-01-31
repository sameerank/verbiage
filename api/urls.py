from django.conf.urls import url
from rest_framework.urlpatterns import format_suffix_patterns
from api import views

urlpatterns = [
    url(r'^$', views.api_root),
    url(r'^age-groups/$', views.AgeGroupList.as_view(), name="age-groups"),
    url(r'^random-book/$', views.random_book, name="random-book"),
    url(r'^pickles/$', views.PickleList.as_view(), name="pickles"),
    url(r'^classifier/$', views.classifier, name="classifier"),
]

urlpatterns = format_suffix_patterns(urlpatterns)
