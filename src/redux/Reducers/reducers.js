import {
  DELETE_DETAILS,
  GET_DETAILS,
  GET_ANIMES,
  GET_MANGAS,
  TOP_MANGAS,
  GET_MANGA_NAME,
  GET_TOP_ANIMES,
  GET_GENRES,
  FILTER_BY_GENRE,
  ORDER_BY_TITLE,
  ORDER_BY_CHAPTERS,
  GET_USER_BY_ID,
  SET_CATEGORY,
  GET_ANIME_GENRES,
  GET_ANIME_NAME,
  SET_CART_ITEMS,
  ORDER_ANIME_BY_TITLE,
  ORDER_ANIME_BY_GENRE,
  ORDER_ANIME_BY_CHAPTERS,
  GET_ANIME_DETAILS,
  VALIDATE_USER,
  IS_ACTIVE,
  GET_USERS,
  LOGOUT,
} from "../Constants/animes";

const initialState = {
  animes: [],
  details: {},
  mangas: [],
  allMangas: [],
  allAnimes: [],
  genres: [],
  animeGenres: [],
  topMangas: [],
  topAnimes: [],
  user: [],
  category: {},
  cart: [],
  topFourMangas: [],
  user: {},
  users: [],
  authenticated: false,
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
        allAnimes: action.payload,
      };

    case GET_MANGAS:
      const restPriceMangas = action.payload.map((item) => {
        let newPrice = Number(item.price) - 49;
        return {
          ...item,
          price: Number(newPrice.toString().substring(0, 5)),
        };
      });
      return {
        ...state,
        mangas: restPriceMangas,
        allMangas: restPriceMangas,
      };
    case TOP_MANGAS:
      return {
        ...state,
        topMangas: action.payload,
      };
    case GET_MANGA_NAME:
      const manga = [];
      if (action.payload.length === 0) {
        return "This Manga doesn't exist";
      } else {
        manga.push(...action.payload);
      }
      return {
        ...state,
        mangas: manga,
      };
    case GET_GENRES:
      const allGenres = [];
      state.mangas.forEach((item) => {
        let itemGenres = item.genres.split(",");
        for (let i = 0; i < itemGenres.length; i++) {
          allGenres.push(itemGenres[i].trim());
        }
      });
      const dataArr = new Set(allGenres);
      let genres = [...dataArr];
      return {
        ...state,
        genres: genres,
      };
    case FILTER_BY_GENRE:
      let allMangas = state.allMangas;
      let filteredStatus =
        action.payload === "All"
          ? allMangas
          : allMangas.filter((m) => m.genres.includes(action.payload));
      return {
        ...state,
        mangas: [...filteredStatus],
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
        mangas: [...mangasByTitle],
      };
    case ORDER_BY_CHAPTERS:
      let mangasByChapters =
        action.payload === "chapters asc"
          ? state.mangas.sort((a, b) => a.chapters - b.chapters)
          : state.mangas.sort((a, b) => b.chapters - a.chapters);
      return {
        ...state,
        mangas: [...mangasByChapters],
      };
    case VALIDATE_USER:
      return {
        ...state,
        user: action.payload,
      };
    case IS_ACTIVE:
      return {
        ...state,
        authenticated: action.payload,
      };
    case GET_USERS:
      return {
        ...state,
        users: action.payload,
      };
    case LOGOUT:
      return {
        ...state,
        user: action.payload,
      };
    case SET_CATEGORY:
      return {
        ...state,
        category: action.payload,
      };
    case GET_TOP_ANIMES:
      return {
        ...state,
        topAnimes: action.payload,
      };
    case GET_ANIME_GENRES:
      const allAnimeGenres = [];
      state.animes.forEach((item) => {
        for (let i = 0; i < item.genres.length; i++) {
          allAnimeGenres.push(item.genres[i].trim());
        }
      });
      const animesArr = new Set(allAnimeGenres);
      let animeGenres = [...animesArr];
      return {
        ...state,
        animeGenres: animeGenres,
      };
    case GET_ANIME_NAME:
      const anime = [];
      if (action.payload.length === 0) {
        return "This Manga doesn't exist";
      } else if (action.payload.length > 100) {
        anime.push(...action.payload.slice(0, 100));
      } else {
        anime.push(...action.payload);
      }
      return {
        ...state,
        animes: anime,
      };
    case SET_CART_ITEMS:
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    case ORDER_ANIME_BY_GENRE:
      console.log(ORDER_ANIME_BY_GENRE);
      let allAnimes = state.allAnimes;
      let filteredStatusAnime =
        action.payload === "All"
          ? allAnimes
          : allAnimes.filter((m) => m.genres.includes(action.payload));
      return {
        ...state,
        animes: [...filteredStatusAnime],
      };
    case ORDER_ANIME_BY_TITLE:
      console.log(ORDER_ANIME_BY_TITLE);
      let animesByTitle =
        action.payload === "asc"
          ? state.animes.sort((a, b) => {
              if (a.title > b.title) return 1;
              if (a.title < b.title) return -1;
              return 0;
            })
          : state.animes.sort((a, b) => {
              if (a.title < b.title) return 1;
              if (a.title > b.title) return -1;
              return 0;
            });
      return {
        ...state,
        animes: [...animesByTitle],
      };
    case ORDER_ANIME_BY_CHAPTERS:
      console.log(ORDER_ANIME_BY_CHAPTERS);
      let animesByChapters =
        action.payload === "chapters asc"
          ? state.animes.sort((a, b) => a.chapters - b.chapters)
          : state.animes.sort((a, b) => b.chapters - a.chapters);
      return {
        ...state,
        animes: [...animesByChapters],
      };
    case GET_ANIME_DETAILS:
      return {
        ...state,
        details: action.payload,
      };
    default:
      return state;
  }
};

export default rootReducer;
