export const ADD_TIME = "ADD_TIME";
export const SET_TIMES = "SET_TIMES";

export const addTime = (newTime) => ({
  type: ADD_TIME,
  payload: newTime,
});

export const setTimes = (newTimes) => ({
  type: SET_TIMES,
  payload: newTimes,
});
