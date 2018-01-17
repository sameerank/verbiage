from api.models import Book, Level, TrainedModel
from api.serializers import BookSerializer, LevelSerializer, TrainedModelSerializer
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
