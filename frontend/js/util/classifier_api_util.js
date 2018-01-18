const JSON_FORMAT = '?format=json';

export const createClassifier = payload => (
    $.ajax({
        method: 'POST',
        url: '/api/classifier/',
        data: payload
    })
);

export const fetchClassifier = id => (
    $.ajax({
        method: 'GET',
        url: `/api/classifier/${id}/` + JSON_FORMAT,
    })
);