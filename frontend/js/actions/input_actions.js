export const WAITING = 'WAITING';
export const TYPING = 'TYPING';
export const FETCHING = 'FETCHING';
export const SET_AGE = 'SET_AGE';
export const CLEAR_AGE = 'CLEAR_AGE';


export const waitingInput = input => ({
    type: WAITING,
    description: input.description
});

export const typingInput = input => ({
    type: TYPING,
    description: input.description
});

export const fetchingInput = input => ({
    type: FETCHING,
    description: input.description
});

export const clearInput = () => ({
    type: WAITING,
    description: ''
});

export const setAge = (age) => ({
    type: SET_AGE,
    age
});

export const clearAge = () => ({
    type: CLEAR_AGE,
    age: { age: null }
});
