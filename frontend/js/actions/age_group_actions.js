import * as AgeGroupAPIUtil from '../util/age_group_api_util';
import { receiveError, clearError } from './error_actions';

export const RECEIVE_AGE_GROUPS = "RECEIVE_AGE_GROUPS";

export const receiveAgeGroups = ageGroups => ({
    type: RECEIVE_AGE_GROUPS,
    ageGroups
});

export const fetchAgeGroups = () => dispatch => (
    AgeGroupAPIUtil.fetchAgeGroups().then(
        ageGroups => {
            dispatch(receiveAgeGroups(ageGroups));
            dispatch(clearError());
        },
        err => dispatch(receiveError(err))
    )
);