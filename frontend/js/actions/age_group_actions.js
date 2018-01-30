import * as AgeGroupAPIUtil from '../util/age_group_api_util';
import { receiveErrors, clearErrors } from './error_actions';

export const RECEIVE_AGE_GROUPS = "RECEIVE_AGE_GROUPS";
export const AGE_GROUP_ERROR = "AGE_GROUP_ERROR";

export const receiveAgeGroups = ageGroups => ({
  type: RECEIVE_AGE_GROUPS,
  ageGroups
});

export const ageGroupError = error => ({
  type: AGE_GROUP_ERROR,
  error
});

export const fetchAgeGroups = () => dispatch => (
  AgeGroupAPIUtil.fetchAgeGroups().then(ageGroups => dispatch(receiveAgeGroups(ageGroups)))
);