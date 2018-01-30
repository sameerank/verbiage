export const createClassifier = payload => (
    $.ajax({
        method: 'POST',
        url: '/api/classifier/',
        data: payload
    })
);