from api.models import TrainedModel
from rest_framework import serializers


class TrainedModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = TrainedModel
        fields = ('id', 'name', 'created', 'modified')
