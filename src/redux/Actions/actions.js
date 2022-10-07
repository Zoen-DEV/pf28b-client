import axios from "axios";
import Swal from "sweetalert2";
import animerceApp from "../../helpers/axiosConfigure";
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
  VALIDATE_USER,
  IS_ACTIVE,
  GET_USERS,
  LOGOUT,
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

// var id = "86359f78-9835-474b-8e98-dd0eb7be0c32"
// export function getUsers(email) {
//   const url = `http://localhost:3000/login/${email}`;
//   return async function (dispatch) {
//     try {
//       const resp = await axios.get(url);
//       // console.log({ resp });
//       dispatch({
//         type: GET_USER_BY_ID,
//         payload: resp.data,
//       });
//     } catch (error) {
//       alert(error);
//     }
//   };
// }

export function validateUser(obj) {
  // const url = "http://localhost:3000/login/auth";
  return async function (dispatch) {
    try {
      // const resp = await axios.post(url, obj);
      const resp = await animerceApp.post('/auth',obj)
      const {msg, user, token} = resp.data
      console.log(msg, user, token);
      localStorage.setItem("token", token);
      localStorage.setItem("token-init-date", new Date().getTime());
      dispatch({ type: VALIDATE_USER, payload: user });
      dispatch({ type: IS_ACTIVE, payload: true });
      Swal.fire({
        title: msg,
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        }
      })
      
    } catch (error) {
      console.log(error.response.data.error);
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: error.response.data.error,
        // footer: '<a href="">Why do I have this issue?</a>'
      })
      // Swal.fire(error.response.data.error);
    }
  };
}

export function getUsers() {

  return async function (dispatch) {
    try {
      const resp = await animerceApp.get("/users");
      // console.log({ resp });
      dispatch({ type: GET_USERS, payload: resp.data });
    } catch (error) {
      console.log(error);
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: error.response.data.msg,
        // footer: '<a href="">Why do I have this issue?</a>'
      });
    }
  };
}

export function logOut() {
  return function (dispatch) {
    dispatch({ type: LOGOUT, payload: {} });
    localStorage.removeItem("token");
    localStorage.removeItem("token-init-date");
  };
}

