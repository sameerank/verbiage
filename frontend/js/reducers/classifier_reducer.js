import { RECEIVE_CLASSIFIER, CLEAR_CLASSIFIER, CLASSIFIER_ERROR } from '../actions/classifier_actions';
import merge from 'lodash/merge';

const classifierReducer = (state = {}, action) => {
    Object.freeze(state);
    switch(action.type){
        case RECEIVE_CLASSIFIER:
            const newClassifier = action.classifier;
            return merge({}, state, newClassifier);
        case CLEAR_CLASSIFIER:
            return {};
        case CLASSIFIER_ERROR:
            console.log(action.error);
        default:
            return state;
    }
};

export default classifierReducer;