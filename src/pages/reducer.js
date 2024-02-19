import { ADD_TIME } from "./actions";

const initialState = {
  times: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TIME:
      return {
        ...state,
        times: [...state.times, action.payload],
      };
    default:
      return state;
  }
};

export default reducer;
