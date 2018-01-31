import { RECEIVE_ERROR, CLEAR_ERROR } from '../actions/error_actions';


const errorReducer = (state = [], action) => {
    Object.freeze(state);

    switch(action.type) {
        case RECEIVE_ERROR:
            console.log("ERROR", action.error);
            return action.error;
        case CLEAR_ERROR:
            return [];
        default:
            return state;
    }
};

export default errorReducer;
