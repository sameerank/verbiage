export const CLEAR_ERROR = "CLEAR_ERROR";
export const RECEIVE_ERROR = "RECEIVE_ERROR";

export const receiveError = error => ({
  type: RECEIVE_ERROR,
  error
});

export const clearError = () => ({
  type: CLEAR_ERROR
});