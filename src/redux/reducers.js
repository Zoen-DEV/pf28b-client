import { DELETE_DETAILS, GET_DETAILS } from "./actions";

const initialState = {
  animes: [],
  details: {},
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DETAILS:
      return {
        ...state,
        details: action.payload,
      };
    case DELETE_DETAILS:
      return {
        ...state,
        details: {},
      };
    default:
      return state;
  }
};

export default rootReducer;
