import { WAITING, FETCHING, TYPING, SET_AGE } from '../actions/input_actions';
import merge from "lodash/merge";

const inputReducer = (state = {}, action) => {
    Object.freeze(state);
    switch(action.type){
        case WAITING:
            return merge({}, state, action);
        case FETCHING:
            return merge({}, state, action);
        case TYPING:
            return merge({}, state, action);
        case SET_AGE:
            const newAge = action.age;
            return merge({}, state, newAge);
        default:
            return state;
    }
};

export default inputReducer;