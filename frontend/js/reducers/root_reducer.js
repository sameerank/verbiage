import { combineReducers } from 'redux';

import ageGroupReducer from './age_group_reducer';
import bookReducer from './book_reducer';
import classifierReducer from './classifier_reducer';
import inputReducer from './input_reducer';
import errorReducer from './error_reducer';

const rootReducer = combineReducers({
    ageGroups: ageGroupReducer,
    book: bookReducer,
    classifier: classifierReducer,
    input: inputReducer,
    error: errorReducer
});

export default rootReducer;