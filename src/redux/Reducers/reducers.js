import {
  DELETE_DETAILS,
  GET_DETAILS,
  GET_ANIMES,
  GET_MANGAS,
  TOP_MANGAS,
  GET_GENRES,
  FILTER_BY_GENRE,
  ORDER_BY_TITLE,
  ORDER_BY_CHAPTERS,
  POST_USER
} from "../Constants/animes";

const initialState = {
  animes: [],
  details: {},
  mangas: [],
  allMangas: [],
  genres: [],
  topFourMangas: [],
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
        allMangas: action.payload,
      };

    case GET_MANGAS:
      return {
        ...state,
        mangas: action.payload,
        allMangas: action.payload,
      };
    case TOP_MANGAS:
      return {
        ...state,
        topFourMangas: action.payload,
      };
    case GET_GENRES:
      return {
        ...state,
        genres: action.payload,
      };
    
    case FILTER_BY_GENRE:
      let allMangas = state.allMangas;
      let filteredStatus =
        action.payload === "All"
          ? allMangas
          : allMangas.filter((m) => m.genres.includes(action.payload));
      return {
        ...state,
        mangas: filteredStatus,
      };
    case ORDER_BY_TITLE:
      let mangasByTitle =
        action.payload === "asc"
          ? state.mangas.sort((a, b) => {
              if (a.title > b.title) return 1;
              if (a.title < b.title) return -1;
              return 0;
            })
          : state.mangas.sort((a, b) => {
              if (a.title < b.title) return 1;
              if (a.title > b.title) return -1;
              return 0;
            });
      return {
        ...state,
        mangas: mangasByTitle,
      };
    case ORDER_BY_CHAPTERS:
      let mangasByChapters =
        action.payload === "chapters asc"
          ? state.mangas.sort((a, b) => a.chapters - b.chapters)
          : state.mangas.sort((a, b) => b.chapters - a.chapters);
      return {
        ...state,
        mangas: mangasByChapters,
      };
    default:
      return state;
  }
};

export default rootReducer;
