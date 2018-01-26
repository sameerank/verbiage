import re
import string

PUNCT_REGEX = re.compile('[%s]' % re.escape(string.punctuation))

def standardize_text(text_to_standardize):
    text_to_standardize = text_to_standardize.replace(r"http\S+", "")
    text_to_standardize = text_to_standardize.replace(r"http", "")
    text_to_standardize = text_to_standardize.replace(r"@\S+", "")
    text_to_standardize = text_to_standardize.replace(r"[^A-Za-z0-9(),!?@\'\`\"\_\n]", " ")
    text_to_standardize = text_to_standardize.replace(r"@", "at")
    text_to_standardize = text_to_standardize.strip()
    text_to_standardize = text_to_standardize.lower()
    standardized_text = PUNCT_REGEX.sub(u'', text_to_standardize)

    return standardized_text
