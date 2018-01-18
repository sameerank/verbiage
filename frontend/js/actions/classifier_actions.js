import * as ClassifierAPIUtil from '../util/classifier_api_util';

export const RECEIVE_CLASSIFIER = 'RECEIVE_CLASSIFIER';


export const receiveClassifier = classifier => ({
    type: RECEIVE_CLASSIFIER,
    classifier
});

export const createClassifier = payload => dispatch => (
    ClassifierAPIUtil.createClassifier(payload)
        .then(
            classifier => dispatch(receiveClassifier(classifier))
        )
);

export const fetchClassifier = id => dispatch => (
    ClassifierAPIUtil.fetchClassifier(id).then(classifier => dispatch(receiveClassifier(classifier)))
);