import * as BookAPIUtil from '../util/book_api_util';

export const RECEIVE_BOOKS = 'RECEIVE_BOOKS';
export const RECEIVE_BOOK = 'RECEIVE_BOOK';

export const receiveBooks = books => ({
    type: RECEIVE_BOOKS,
    books
});

export const receiveBook = book => ({
    type: RECEIVE_BOOK,
    book
});

export const fetchBooks = () => dispatch => (
    BookAPIUtil.fetchBooks().then(books => dispatch(receiveBooks(books)))
);

export const fetchBook = id => dispatch => (
    BookAPIUtil.fetchBook(id).then(book => dispatch(receiveBook(book)))
);