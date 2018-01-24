import { WAITING, FETCHING, TYPING, SET_AGE, CLEAR_AGE } from '../actions/input_actions';
import merge from "lodash/merge";

const inputReducer = (state = {}, action) => {
    Object.freeze(state);
    const newAge = action.age;
    switch(action.type){
        case WAITING:
            return merge({}, state, action);
        case FETCHING:
            return merge({}, state, action);
        case TYPING:
            return merge({}, state, action);
        case SET_AGE:
            return merge({}, state, newAge);
        case CLEAR_AGE:
            return merge({}, state, newAge);
        default:
            return state;
    }
};

export default inputReducer;