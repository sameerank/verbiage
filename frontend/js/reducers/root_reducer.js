import { combineReducers } from 'redux';

import booksReducer from './books_reducer';

const rootReducer = combineReducers({
    books: booksReducer
});

export default rootReducer;