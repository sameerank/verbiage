const JSON_FORMAT = '?format=json';

export const fetchAgeGroups = () => (
    $.ajax({
        method: 'GET',
        url: '/api/age-groups/' + JSON_FORMAT
    })
);