import axios from "axios";
import {
  GET_ANIMES,
  GET_MANGAS,
  GET_DETAILS,
  DELETE_DETAILS,
  TOP_MANGAS,
  GET_GENRES,
  FILTER_BY_GENRE,
  ORDER_BY_TITLE,
  ORDER_BY_CHAPTERS,
} from "../Constants/animes";
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

export function getAnimes() {
  console.log("dispara getAnimes");
  return async function (dispatch) {
    try {
      let response = await axios.get("http://localhost:3000/animes");
      dispatch({
        type: GET_ANIMES,
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

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

export function getGenres() {
  return async function (dispatch) {
    try {
      let allGenres = await axios.get("http://localhost:3000/genres");
      return dispatch({
        type: GET_GENRES,
        payload: allGenres.data.genresDB,
      });
    } catch (error) {
      console.log(error);
    }
  };
}





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
