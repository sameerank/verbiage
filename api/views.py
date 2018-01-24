from api.models import Book, Level, TrainedModel
from api.serializers import BookSerializer, LevelSerializer, TrainedModelSerializer
from api.utils import load_word2vec, standardize_text, w2v_make_pipline
from sklearn.pipeline import make_pipeline
from lime.lime_text import LimeTextExplainer
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework import generics
from operator import itemgetter

GRADE_CATEGORIES = ('Preschool/Pre-K', 'K-2', '3-5', '6-8', '9-12',)

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


class W2VClassifier(APIView):

    def post(self, request, format=None):
        tm = TrainedModel.objects.get(pk=1)
        classifier = tm.pickled_model
        vectorizer = load_word2vec()
        input_text = request.data.get('description', 'ERROR')
        if not input_text:
            response = {'error': 'Input is an empty string'}
            return Response(response, status=status.HTTP_204_NO_CONTENT)
        standardized_text = standardize_text(input_text)
        explainer = LimeTextExplainer(class_names=GRADE_CATEGORIES)
        pipeline = w2v_make_pipline(vectorizer, classifier)
        exp = explainer.explain_instance(standardized_text, pipeline, num_features=6, labels=[0, 1, 2, 3, 4])
        predict_probas = dict(zip(exp.class_names, exp.predict_proba))
        prediction = max(predict_probas.items(), key=itemgetter(1))[0]
        response = {
            'final_prediction': prediction,
            'ordered_class_names': exp.class_names,
            'predict_probas': predict_probas,
            'as_list': {
                exp.class_names[lbl]: exp.as_list(label=lbl) for lbl in exp.available_labels()
            }
        }
        return Response(response, status=status.HTTP_201_CREATED)


class TfidfClassifier(APIView):

    def post(self, request, format=None):
        tm_classifier = TrainedModel.objects.get(name='tfidf_logistic_regression')
        classifier = tm_classifier.pickled_model
        tm_vectorizer = TrainedModel.objects.get(name='tfidf_vectorizer')
        vectorizer = tm_vectorizer.pickled_model
        input_text = request.data.get('description', 'ERROR')
        if not input_text:
            response = {'error': 'Input is an empty string'}
            return Response(response, status=status.HTTP_404_NOT_FOUND)
        standardized_text = standardize_text(input_text)
        explainer = LimeTextExplainer(class_names=GRADE_CATEGORIES)
        c = make_pipeline(vectorizer, classifier)
        exp = explainer.explain_instance(standardized_text, c.predict_proba, num_features=6, labels=[0, 1, 2, 3, 4])
        predict_probas = dict(zip(exp.class_names, exp.predict_proba))
        prediction = max(predict_probas.items(), key=itemgetter(1))[0]
        highlighted_html = {}
        for lbl in exp.available_labels():
            original_text = standardized_text
            for word, val in exp.as_list(label=lbl):
                color = "#FF4136" if val < 0 else "#2ECC40"
                original_text = " ".join(['<span style="background-color: {};">{}</span>'.format(
                    color, w) if w == word else w for w in original_text.split(" ")])
            highlighted_html[exp.class_names[lbl]] = original_text
        response = {
            'final_prediction': prediction,
            'ordered_class_names': exp.class_names,
            'predict_probas': predict_probas,
            'as_list': {
                exp.class_names[lbl]: exp.as_list(label=lbl) for lbl in exp.available_labels()
            },
            'highlighted_html': highlighted_html

        }
        return Response(response, status=status.HTTP_201_CREATED)