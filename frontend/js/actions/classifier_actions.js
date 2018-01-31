import * as ClassifierAPIUtil from '../util/classifier_api_util';
import { waitingInput, clearInput } from './input_actions';
import { receiveError, clearError } from './error_actions';

export const RECEIVE_CLASSIFIER = 'RECEIVE_CLASSIFIER';
export const CLEAR_CLASSIFIER = 'CLEAR_CLASSIFIER';

export const receiveClassifier = classifier => ({
    type: RECEIVE_CLASSIFIER,
    classifier
});

export const clearClassifier = () => ({
    type: CLEAR_CLASSIFIER,
});

export const createClassifier = payload => dispatch => (
    ClassifierAPIUtil.createClassifier(payload)
        .then(
            classifier => {
                dispatch(receiveClassifier(classifier));
                dispatch(waitingInput(payload));
                dispatch(clearError());
            },
            err => {
                if (err.status === 404) {
                    dispatch(clearClassifier());
                    dispatch(clearInput());
                } else {
                    dispatch(receiveError(err));
                }
            }
        )
);