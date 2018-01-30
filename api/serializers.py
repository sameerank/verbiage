from api.models import Pickle, AgeGroup
from rest_framework import serializers


class PickleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Pickle
        fields = ('id', 'name', 'created', 'modified')


class AgeGroupSerializer(serializers.ModelSerializer):
    class Meta:
        model = AgeGroup
        fields = ('id', 'label')
