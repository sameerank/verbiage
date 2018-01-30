from django.contrib import admin
from api.models import Pickle, Book, AgeGroup

# Register your models here.
admin.site.register(Pickle)
admin.site.register(Book)
admin.site.register(AgeGroup)