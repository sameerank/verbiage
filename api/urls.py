from django.conf.urls import url
from rest_framework.urlpatterns import format_suffix_patterns
from api import views

urlpatterns = [
    url(r'^age-groups/$', views.AgeGroupList.as_view(), name="age_groups"),
    url(r'^random-book/$', views.random_book, name="random_book"),
    url(r'^pickles/$', views.PickleList.as_view(), name="pickles"),
    url(r'^classifier/$', views.classifier, name="classifier"),
]

urlpatterns = format_suffix_patterns(urlpatterns)