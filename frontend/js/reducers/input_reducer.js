import { WAITING, FETCHING, TYPING } from '../actions/input_actions';
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
        default:
            return state;
    }
};

export default inputReducer;