from django.db import models
from django.db.models.aggregates import Count
from picklefield.fields import PickledObjectField
from random import randint


class Pickle(models.Model):
    created = models.DateTimeField(auto_now_add=True)
    modified = models.DateTimeField(auto_now=True)
    name = models.CharField(max_length=100, blank=True, default='')
    pickled_model = PickledObjectField()

    class Meta:
        ordering = ('created',)


class AgeGroup(models.Model):
    created = models.DateTimeField(auto_now_add=True)
    modified = models.DateTimeField(auto_now=True)
    label = models.CharField(max_length=20, blank=True, default='')

    class Meta:
        ordering = ('created',)

    def __str__(self):
        return self.label


class BooksManager(models.Manager):
    def random(self):
        count = self.aggregate(count=Count('id'))['count']
        random_index = randint(0, count - 1)
        return self.all()[random_index]


class Book(models.Model):
    created = models.DateTimeField(auto_now_add=True)
    modified = models.DateTimeField(auto_now=True)
    title = models.TextField(blank=True, default='')
    author = models.TextField(blank=True, default='')
    description = models.TextField(blank=True, default='')
    age_group = models.ForeignKey(AgeGroup, on_delete=models.CASCADE, related_name='books', related_query_name='book')

    objects = BooksManager()

    class Meta:
        ordering = ('created',)

    def __str__(self):
        return self.title
