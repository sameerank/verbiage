import { combineReducers } from 'redux';

import classifierReducer from './classifier_reducer';
import inputReducer from './input_reducer';

const rootReducer = combineReducers({
    classifier: classifierReducer,
    input: inputReducer
});

export default rootReducer;