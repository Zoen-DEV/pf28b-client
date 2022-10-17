import Swal from "sweetalert2";
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
  UPDATE_CART,
  GOOGLE_AUTH,
  DELETE_USER,
  DELETE_ITEM_CART,
  RELOAD_FILTERS,
  GET_CART,
  GET_REVIEWS_PRODUCT,
  GET_REVIEWS_USER,
  POST_REVIEW,
  DELETE_REVIEW_ADMIN,
  DELETE_REVIEW_USER,
  REFRESH_REVIEWS,
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
  category: {},
  cart: [],
  topFourMangas: [],
  user: {},
  users: [],
  authenticated: false,
  isLogin: false,
  reviews: [],
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
      return {
        ...state,
        mangas: action.payload,
        allMangas: action.payload,
      };
    case TOP_MANGAS:
      return {
        ...state,
        topMangas: action.payload,
      };
    case GET_MANGA_NAME:
      console.log("search manga");
      const manga = state.allMangas.filter((item) =>
        item.title.includes(action.payload)
      );
      if (action.payload.length === 0) {
        Swal.fire("Oops?", "This Anime doesn't exist", "question");
        break;
      } else {
        return {
          ...state,
          mangas: manga,
        };
      }
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
        isLogin: true,
      };
    case GOOGLE_AUTH:
      return {
        ...state,
        user: action.payload,
        isLogin: true,
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
        isLogin: false,
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
      const anime = state.allAnimes.filter((item) => {
        let title = item.title.toLowerCase();
        return title.includes(action.payload.toLowerCase());
      });
      if (anime.length === 0) {
        Swal.fire("Oops?", "This Anime doesn't exist", "question");
        break;
      } else {
        return {
          ...state,
          animes: anime,
        };
      }
    case UPDATE_CART:
      return {
        ...state,
        cart: action.payload,
      };
    case SET_CART_ITEMS:
      if (action.payload.login) {
        return {
          ...state,
          cart: [...state.cart, action.payload.Product],
        };
      } else {
        // localStorage.setItem("cart", JSON.stringify([...state.cart, action.payload]));
        let lsCart = localStorage.getItem("cart");
        if (lsCart) {
          localStorage.setItem(
            "cart",
            JSON.stringify([...JSON.parse(lsCart), action.payload])
          );
        } else {
          localStorage.setItem("cart", JSON.stringify([action.payload]));
        }
        return {
          ...state,
          cart: [...state.cart, action.payload],
        };
      }
    case GET_CART:
      return {
        ...state,
        cart: [...action.payload],
      };
    case ORDER_ANIME_BY_GENRE:
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
      let animesByChapters =
        action.payload === "chapters asc"
          ? state.animes.sort((a, b) => a.rating - b.rating)
          : state.animes.sort((a, b) => b.rating - a.rating);
      return {
        ...state,
        animes: [...animesByChapters],
      };
    case GET_ANIME_DETAILS:
      return {
        ...state,
        details: action.payload,
      };
    case DELETE_USER:
      return {
        ...state,
        users: state.users.filter((user) => user.email !== action.payload),
      };
    case DELETE_ITEM_CART:
      console.log(state.cart[0].Product.id);
      if (Object.keys(state.user).length === 0) {
        const newCart = state.cart.filter(
          (item) => item.Product.id !== action.payload
        );
        localStorage.setItem("cart", JSON.stringify(newCart));
        return {
          ...state,
          cart: [...newCart],
        };
      } else {
        const newCart = state.cart.filter(
          (item) => item.Product.id !== action.payload
        );
        // localStorage.setItem("cart", JSON.stringify(newCart));
        return {
          ...state,
          cart: [...newCart],
        };
      }
    case RELOAD_FILTERS:
      return {
        ...state,
        animes: [...state.allAnimes],
        mangas: [...state.allMangas],
      };
    case GET_REVIEWS_PRODUCT:
      return {
        ...state,
        reviews: action.payload,
      };
    case REFRESH_REVIEWS:
      return {
        ...state,
        reviews: [],
      };
    case POST_REVIEW:
      return {
        ...state,
        reviews: [...state.reviews, action.payload],
      };
    default:
      return state;
  }
};

export default rootReducer;
