import {
  DELETE_DETAILS,
  GET_DETAILS,
  GET_ANIMES,
  GET_MANGAS,
} from "../Constants/animes";

const initialState = {
  animes: [],
  details: {},
  mangas: [],
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
    case GET_ANIMES:
      return {
        ...state,
        animes: action.payload,
      };

    case GET_MANGAS:
      return {
        ...state,
        mangas: action.payload,
      };

    default:
      return state;
  }
};

export default rootReducer;
