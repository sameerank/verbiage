from api.models import AgeGroup, Book, Pickle
from rest_framework import serializers


class AgeGroupSerializer(serializers.ModelSerializer):
    class Meta:
        model = AgeGroup
        fields = ('id', 'label')


class BookSerializer(serializers.ModelSerializer):
    class Meta:
        model = Book
        fields = ('id', 'title', 'author', 'description')


class PickleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Pickle
        fields = ('id', 'name', 'created', 'modified')