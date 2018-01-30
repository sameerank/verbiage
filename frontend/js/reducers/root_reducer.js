import { combineReducers } from 'redux';

import classifierReducer from './classifier_reducer';
import inputReducer from './input_reducer';
import errorsReducer from './error_reducer';

const rootReducer = combineReducers({
    classifier: classifierReducer,
    input: inputReducer,
    errors: errorsReducer

});

export default rootReducer;