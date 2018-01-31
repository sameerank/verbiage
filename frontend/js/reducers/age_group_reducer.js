import { RECEIVE_AGE_GROUPS } from '../actions/age_group_actions';
import merge from 'lodash/merge';

const ageGroupReducer = (state = {}, action) => {
    Object.freeze(state);
    switch(action.type){
        case RECEIVE_AGE_GROUPS:
            const newAgeGroups = action.ageGroups;
            return merge({}, state, newAgeGroups);
        default:
            return state;
    }
};

export default ageGroupReducer;