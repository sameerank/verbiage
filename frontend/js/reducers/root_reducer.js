import { combineReducers } from 'redux';

import ageGroupReducer from './age_group_reducer';
import classifierReducer from './classifier_reducer';
import inputReducer from './input_reducer';
import errorsReducer from './error_reducer';

const rootReducer = combineReducers({
    ageGroups: ageGroupReducer,
    classifier: classifierReducer,
    input: inputReducer,
    errors: errorsReducer
});

export default rootReducer;