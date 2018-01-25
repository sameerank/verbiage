
def standardize_text(text_to_standardize):
    text_to_standardize = text_to_standardize.replace(r"http\S+", "")
    text_to_standardize = text_to_standardize.replace(r"http", "")
    text_to_standardize = text_to_standardize.replace(r"@\S+", "")
    text_to_standardize = text_to_standardize.replace(r"[^A-Za-z0-9(),!?@\'\`\"\_\n]", " ")
    text_to_standardize = text_to_standardize.replace(r"@", "at")
    text_to_standardize = text_to_standardize.strip()
    text_to_standardize = text_to_standardize.lower()
    return text_to_standardize
