export const WAITING = 'WAITING';
export const TYPING = 'TYPING';
export const FETCHING = 'FETCHING';


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