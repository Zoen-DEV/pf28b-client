import {
  DELETE_DETAILS,
  GET_DETAILS,
  GET_ANIMES,
  GET_MANGAS,
  TOP_MANGAS,
<<<<<<< HEAD
  DELETE_TOP_MANGAS,
=======
  GET_GENRES,
  FILTER_BY_GENRE,
  ORDER_BY_TITLE,
  ORDER_BY_CHAPTERS,
>>>>>>> cf8cadb3855800283c41abd0ca788312ceada928
} from "../Constants/animes";

const initialState = {
  animes: [],
  details: {},
  mangas: [],
  allMangas: [],
  genres: [],
  topFourMangas: []
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
        allMangas: action.payload
      };

    case GET_MANGAS:
      return {
        ...state,
        mangas: action.payload,
        allMangas: action.payload
      };
    case TOP_MANGAS:
      return {
        ...state,
        topFourMangas: action.payload
      }
    case DELETE_TOP_MANGAS:
      return {
        ...state,
        topFourMangas: []
      }
    case GET_GENRES:
      console.log('reducer getGenres')
      return {
        ...state,
        genres: action.payload
      }
    case FILTER_BY_GENRE:
      let allMangas = state.allMangas
      console.log(allMangas);
      let filteredStatus = action.payload === 'All'?
      allMangas:
      allMangas.filter(m => m.genres.includes(action.payload))
      console.log(filteredStatus);
      return {
        ...state,
        mangas: filteredStatus
      }
      case ORDER_BY_TITLE:
        let mangasByTitle = action.payload === 'asc'?
          state.mangas.sort((a, b) => {
            if(a.title > b.title) return 1;
            if(a.title < b.title) return -1;
            return 0;
          }):
          state.mangas.sort((a, b) => {
            if(a.title < b.title) return 1;
            if(a.title > b.title) return -1;
            return 0;
          })
          console.log(mangasByTitle);
        return {
          ...state,
          mangas: mangasByTitle
        }
      case ORDER_BY_CHAPTERS:
        let mangasByChapters = action.payload === 'chapters asc'
          ? state.mangas.sort((a, b) => a.chapters - b.chapters)
          : state.mangas.sort((a, b) => b.chapters - a.chapters)
          console.log(mangasByChapters);
        return {
          ...state,
          mangas: mangasByChapters
        }
    default:
      return state;
  }
};

export default rootReducer;
