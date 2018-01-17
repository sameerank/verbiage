const JSON_FORMAT = '?format=json';

export const fetchBooks = () => (
    $.ajax({
        method: 'GET',
        url: '/api/books/' + JSON_FORMAT
    })
);

export const fetchBook = id => (
    $.ajax({
        method: 'GET',
        url: `/api/books/${id}/` + JSON_FORMAT,
    })
);