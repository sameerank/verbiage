from django.db import models
from picklefield.fields import PickledObjectField


class Book(models.Model):
    created = models.DateTimeField(auto_now_add=True)
    modified = models.DateTimeField(auto_now=True)
    title = models.TextField(blank=True, default='')
    author = models.TextField(blank=True, default='')
    description = models.TextField(blank=True, default='')
    url = models.URLField(max_length=2000)
    level = models.ForeignKey('Level', on_delete=models.CASCADE, related_name='books', related_query_name='book')

    class Meta:
        ordering = ('created',)


class Level(models.Model):
    created = models.DateTimeField(auto_now_add=True)
    modified = models.DateTimeField(auto_now=True)
    label = models.CharField(max_length=20, blank=True, default='')

    class Meta:
        ordering = ('created',)

    def __str__(self):
        return self.label


class TrainedModel(models.Model):
    created = models.DateTimeField(auto_now_add=True)
    modified = models.DateTimeField(auto_now=True)
    name = models.CharField(max_length=100, blank=True, default='')
    pickled_model = PickledObjectField()

    class Meta:
        ordering = ('created',)
