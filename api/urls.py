from django.conf.urls import url
from rest_framework.urlpatterns import format_suffix_patterns
from api import views

urlpatterns = [
    url(r'^books/$', views.BookList.as_view(), name="book_index"),
    url(r'^books/(?P<pk>[0-9]+)/$', views.BookDetail.as_view(), name="book_detail"),
    url(r'^levels/$', views.LevelList.as_view(), name="level_index"),
    url(r'^levels/(?P<pk>[0-9]+)/$', views.LevelDetail.as_view(), name="level_detail")
]

urlpatterns = format_suffix_patterns(urlpatterns)