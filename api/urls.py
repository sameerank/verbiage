from django.conf.urls import url
from rest_framework.urlpatterns import format_suffix_patterns
from api import views

urlpatterns = [
    url(r'^models/(?P<pk>[0-9]+)/$', views.TrainedModelList.as_view(), name="model_index"),
    url(r'^classifier/$', views.Classifier.as_view(), name="classifier"),
]

urlpatterns = format_suffix_patterns(urlpatterns)