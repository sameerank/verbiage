from api.models import AgeGroup, Book, Pickle
from api.serializers import PickleSerializer, AgeGroupSerializer, BookSerializer
from api.utils import standardize_text
from sklearn.pipeline import make_pipeline
from lime.lime_text import LimeTextExplainer
from rest_framework import status
from rest_framework import generics
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.reverse import reverse
from operator import itemgetter

GRADE_CATEGORIES = ('K-2', '3-5', '6-8', '9-12',)


class AgeGroupList(generics.ListAPIView):
    queryset = AgeGroup.objects.all()
    serializer_class = AgeGroupSerializer


class PickleList(generics.ListAPIView):
    queryset = Pickle.objects.all()
    serializer_class = PickleSerializer


@api_view(['GET'])
def random_book(request, format=None):
    random_book = Book.objects.random()
    book_serializer = BookSerializer(random_book)
    return Response(book_serializer.data)


@api_view(['POST'])
def classifier(request, format=None):
    tm_classifier = Pickle.objects.get(name='clf')
    classifier = tm_classifier.pickled_model
    tm_vectorizer = Pickle.objects.get(name='tfidf')
    vectorizer = tm_vectorizer.pickled_model
    input_text = request.data.get('description', 'ERROR')
    if not input_text:
        response = {'error': 'Input is an empty string'}
        return Response(response, status=status.HTTP_404_NOT_FOUND)
    standardized_text = standardize_text(input_text)
    explainer = LimeTextExplainer(class_names=GRADE_CATEGORIES)
    c = make_pipeline(vectorizer, classifier)
    exp = explainer.explain_instance(standardized_text, c.predict_proba, num_features=6, labels=[0, 1, 2, 3])
    predict_probas = dict(zip(exp.class_names, exp.predict_proba))
    prediction = max(predict_probas.items(), key=itemgetter(1))[0]
    response = {
        'final_prediction': prediction,
        'ordered_class_names': exp.class_names,
        'predict_probas': predict_probas,
        'as_list': {
            exp.class_names[lbl]: exp.as_list(label=lbl) for lbl in exp.available_labels()
        },
        'standardized_text': standardized_text
    }
    return Response(response, status=status.HTTP_201_CREATED)


@api_view(['GET'])
def api_root(request, format=None):
    return Response({
        'age-groups': reverse('age-groups', request=request, format=format),
        'random-book': reverse('random-book', request=request, format=format),
        'pickles': reverse('pickles', request=request, format=format),
        'classifier': reverse('classifier', request=request, format=format)
    })
