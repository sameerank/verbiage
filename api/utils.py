from django.core.cache import cache
import gensim
import numpy as np
from nltk.tokenize import RegexpTokenizer
import os
from django.conf import settings

def load_word2vec():
    word2vec_cache_key = 'word2vec_cache'
    word2vec = cache.get(word2vec_cache_key)
    if word2vec is None:
        word2vec_filename = "GoogleNews-vectors-negative300.bin.gz"
        word2vec_path = os.path.join(settings.PROJECT_ROOT, word2vec_filename)
        word2vec = gensim.models.KeyedVectors.load_word2vec_format(word2vec_path, binary=True)
        # None below is the timeout parameter. It means cache forever
        cache.set(word2vec_cache_key, word2vec, None)
    return word2vec


def standardize_text(text_to_standardize):
    text_to_standardize = text_to_standardize.replace(r"http\S+", "")
    text_to_standardize = text_to_standardize.replace(r"http", "")
    text_to_standardize = text_to_standardize.replace(r"@\S+", "")
    text_to_standardize = text_to_standardize.replace(r"[^A-Za-z0-9(),!?@\'\`\"\_\n]", " ")
    text_to_standardize = text_to_standardize.replace(r"@", "at")
    text_to_standardize = text_to_standardize.lower()
    return text_to_standardize


def get_average_word2vec(tokens_list, vectorizer):
    k = 300
    if len(tokens_list)<1:
        return np.zeros(k)
    vectorized = [vectorizer[word] if word in vectorizer else np.zeros(k) for word in tokens_list]
    length = len(vectorized)
    summed = np.sum(vectorized, axis=0)
    averaged = np.divide(summed, length)
    return averaged


def w2v_make_pipline(vectorizer, classifier):
    def word2vec_pipeline(examples):
        tokenizer = RegexpTokenizer(r'\w+')
        tokenized_list = []
        for example in examples:
            example_tokens = tokenizer.tokenize(example)
            vectorized_example = get_average_word2vec(example_tokens, vectorizer)
            tokenized_list.append(vectorized_example)
        return classifier.predict_proba(tokenized_list)
    return word2vec_pipeline
