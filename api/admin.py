from django.contrib import admin
from api.models import Book, Level, TrainedModel

# Register your models here.
admin.site.register(Book)
admin.site.register(Level)
admin.site.register(TrainedModel)