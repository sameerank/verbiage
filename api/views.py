from api.models import Book, Level, TrainedModel
from api.serializers import BookSerializer, LevelSerializer, TrainedModelSerializer
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework import generics


class BookList(generics.ListCreateAPIView):
    queryset = Book.objects.all()
    serializer_class = BookSerializer


class BookDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Book.objects.all()
    serializer_class = BookSerializer


class LevelList(generics.ListCreateAPIView):
    queryset = Level.objects.all()
    serializer_class = LevelSerializer


class LevelDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Level.objects.all()
    serializer_class = LevelSerializer


class TrainedModelList(generics.ListCreateAPIView):
    queryset = TrainedModel.objects.all()
    serializer_class = TrainedModelSerializer


class Classifier(APIView):

    def post(self, response, format=None):
        return Response(response.data, status=status.HTTP_201_CREATED)