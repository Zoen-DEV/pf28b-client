import axios from "axios";
import {
  GET_ANIMES,
  GET_MANGAS,
  GET_DETAILS,
  DELETE_DETAILS,
  TOP_MANGAS,
  GET_MANGA_NAME,
  GET_GENRES,
  FILTER_BY_GENRE,
  ORDER_BY_TITLE,
  ORDER_BY_CHAPTERS,
  GET_USER_BY_ID,
  SET_CATEGORY,
  GET_ANIME_DETAILS,
  GET_TOP_ANIMES,
  GET_ANIME_GENRES,
  GET_ANIME_NAME
} from "../Constants/animes";

// MANGAS actions

export const getDetails = (id) => async (dispatch) => {
  try {
    let productDetail = await axios(`http://localhost:3000/manga/${id}`);
    return dispatch({ type: GET_DETAILS, payload: productDetail.data });
  } catch (err) {
    console.error(err);
  }
};

export const deleteDetails = () => (dispatch) => {
  try {
    return dispatch({ type: DELETE_DETAILS });
  } catch (err) {
    console.error(err);
  }
};

export function getMangas() {
  return async function (dispatch) {
    try {
      let response = await axios.get("http://localhost:3000/manga");
      dispatch({
        type: GET_MANGAS,
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export const topMangas = () => async (dispatch) => {
  try {
    let topMangas = await axios(`http://localhost:3000/manga/top`);
    return dispatch({ type: TOP_MANGAS, payload: topMangas.data });
  } catch (err) {
    console.error(err);
  }
};

export function getMangaByTitle(name) {
  return async function (dispatch) {
    try {
      let manga = await axios.get(
        `http://localhost:3000/manga/searchmanga?name=${name}`
      );
      dispatch({
        type: GET_MANGA_NAME,
        payload: manga.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function getGenres() {
  return async function (dispatch) {
    try {
      // let allGenres = await axios.get("http://localhost:3000/genres");
      return dispatch({
        type: GET_GENRES,
        // payload: allGenres.data.genresDB,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

// ANIMES actions

export function getAnimes() {
  return async function (dispatch) {
    try {
      let response = await axios.get("http://localhost:3000/animes");
      return dispatch({
        type: GET_ANIMES,
        payload: response.data.animesDB,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export const getAnimesDetails = () => (dispatch) => {
  return dispatch({ type: GET_ANIME_DETAILS });
};

export const getTopAnimes = () => async (dispatch) => {
  let res = await axios.get("http://localhost:3000/topAnimes");
  return dispatch({ type: GET_TOP_ANIMES, payload: res.data.topAnimesDB });
};

export const getAnimesGenres = () => (dispatch) => {
  return dispatch({ type: GET_ANIME_GENRES})
};

export function getAnimeByTitle(name) {
  return async function (dispatch) {
    try {
      let animes = await axios.get(
        `http://localhost:3000/animes/name?name=${name}`
      );
      dispatch({
        type: GET_ANIME_NAME,
        payload: animes.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

// FILTERS actions

export function filterByGenre(payload) {
  console.log(payload);
  return {
    type: FILTER_BY_GENRE,
    payload,
  };
}

export function orderByTitle(payload) {
  return {
    type: ORDER_BY_TITLE,
    payload,
  };
}

export function orderByChapters(payload) {
  return {
    type: ORDER_BY_CHAPTERS,
    payload,
  };
}



export function getUsers(email) {
  const url = `http://localhost:3000/users/${email}`;
  return async function (dispatch) {
    try {
      const resp = await axios.get(url);
      // console.log({ resp });
      dispatch({
        type: GET_USER_BY_ID,
        payload: resp.data,
      });
    } catch (error) {
      alert(error);
    }
  };
}

export const setCategory = (state) => (dispatch) => {
  return dispatch({ type: SET_CATEGORY, payload: state });
};
