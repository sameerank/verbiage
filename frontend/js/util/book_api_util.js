const JSON_FORMAT = '?format=json';

export const fetchBook = () => (
    $.ajax({
        method: 'GET',
        url: '/api/random-book/' + JSON_FORMAT
    })
);