from api.models import Pickle, AgeGroup
from api.serializers import PickleSerializer, AgeGroupSerializer
from api.utils import standardize_text
from sklearn.pipeline import make_pipeline
from lime.lime_text import LimeTextExplainer
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework import generics
from operator import itemgetter

GRADE_CATEGORIES = ('K-2', '3-5', '6-8', '9-12',)


class AgeGroupList(generics.ListAPIView):
    queryset = AgeGroup.objects.all()
    serializer_class = AgeGroupSerializer


class PickleList(generics.ListAPIView):
    queryset = Pickle.objects.all()
    serializer_class = PickleSerializer


class Classifier(APIView):
    def post(self, request, format=None):
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
        highlighted_html = {}
        for lbl in exp.available_labels():
            original_text = standardized_text
            for word, val in exp.as_list(label=lbl):
                color = "#FF4136" if val < 0 else "#2ECC40"
                original_text = " ".join(['<span style="background-color: {};">{}</span>'.format(
                    color, w) if w == word else w for w in original_text.split()])
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