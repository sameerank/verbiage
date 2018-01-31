import * as AgeGroupAPIUtil from '../util/book_api_util';
import { receiveError, clearError } from './error_actions';

export const RECEIVE_BOOK = "RECEIVE_BOOK";
export const CLEAR_BOOK = "CLEAR_BOOK";

export const receiveBook = book => ({
    type: RECEIVE_BOOK,
    book
});

export const clearBook = () => ({
    type: CLEAR_BOOK
});

export const fetchBook = () => dispatch => (
    AgeGroupAPIUtil.fetchBook().then(
        book => {
            dispatch(receiveBook(book));
            dispatch(clearError());
        },
        err => dispatch(receiveError(err))
    )
);