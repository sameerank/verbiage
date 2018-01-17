import { RECEIVE_BOOKS,
    RECEIVE_BOOK } from '../actions/book_actions';
import merge from 'lodash/merge';

const booksReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState;

    switch(action.type){
        case RECEIVE_BOOKS:
            nextState = {};
            action.books.forEach(todo => nextState[todo.id] = todo);
            return nextState;
        case RECEIVE_BOOK:
            const newTodo = {[action.book.id]: action.book};
            return merge({}, state, newTodo);
        default:
            return state;
    }
};

export default booksReducer;