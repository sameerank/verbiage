import os
import pickle
from django.core.management.base import BaseCommand
from api.models import Pickle
from django.conf import settings


class Command(BaseCommand):
    help = 'Loads pickles'

    def handle(self, *args, **options):
        pickles_path = os.path.join(settings.BASE_DIR, "data_for_db", "pickles")
        tfidf_filename = os.path.join(pickles_path, "tfidf.pickle")
        clf_filename = os.path.join(pickles_path, "clf.pickle")
        with open(tfidf_filename, "rb") as tfidf_file:
            tfidf_data = tfidf_file.read()
            tfidf_pickle = pickle.loads(tfidf_data)
        with open(clf_filename, "rb") as clf_file:
            clf_data = clf_file.read()
            clf_pickle = pickle.loads(clf_data)
        tm_tfidf, _ = Pickle.objects.get_or_create(name='tfidf')
        tm_clf, _ = Pickle.objects.get_or_create(name='clf')

        tm_tfidf.pickled_model = tfidf_pickle
        tm_tfidf.save()

        tm_clf.pickled_model = clf_pickle
        tm_clf.save()

        self.stdout.write(self.style.SUCCESS('Done loading models'))