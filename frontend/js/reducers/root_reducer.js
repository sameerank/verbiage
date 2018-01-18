import { combineReducers } from 'redux';

import classifiersReducer from './classifiers_reducer';

const rootReducer = combineReducers({
    classifier: classifiersReducer
});

export default rootReducer;