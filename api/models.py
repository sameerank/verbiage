from django.db import models
from picklefield.fields import PickledObjectField


class TrainedModel(models.Model):
    created = models.DateTimeField(auto_now_add=True)
    modified = models.DateTimeField(auto_now=True)
    name = models.CharField(max_length=100, blank=True, default='')
    pickled_model = PickledObjectField()

    class Meta:
        ordering = ('created',)
