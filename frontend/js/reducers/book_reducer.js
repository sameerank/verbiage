import { RECEIVE_BOOK, CLEAR_BOOK } from '../actions/book_actions';
import merge from 'lodash/merge';

const bookReducer = (state = {}, action) => {
    Object.freeze(state);
    switch(action.type){
        case RECEIVE_BOOK:
            const newBook = action.book;
            return merge({}, state, newBook);
        case CLEAR_BOOK:
            return {};
        default:
            return state;
    }
};

export default bookReducer;