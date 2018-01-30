import os
import pandas as pd
from django.core.management.base import BaseCommand
from api.models import Book, AgeGroup
from django.conf import settings


class Command(BaseCommand):
    help = 'Loads books'

    def handle(self, *args, **options):
        age_groups = ('K-2', '3-5', '6-8', '9-12')
        ag_models = [AgeGroup.objects.get_or_create(pk=i, label=ag)[0] for i, ag in enumerate(age_groups)]

        filenames = ('k_2', '3_5', '6_8', '9_12')
        books_path = os.path.join(settings.BASE_DIR, "data_for_db", "books")
        for grade_category, filename in enumerate(filenames):
            gc_filename = os.path.join(books_path, "{}.csv".format(filename))
            df = pd.read_csv(gc_filename)
            for row in df.itertuples():
                Book.objects.create(
                    title=row.Title,
                    author=row.Author,
                    description=row.Annotation,
                    age_group=ag_models[grade_category]
                )

        self.stdout.write(self.style.SUCCESS('Done loading books'))
