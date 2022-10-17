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
  // GET_USER_BY_ID,
  SET_CATEGORY,
  GET_ANIME_DETAILS,
  GET_TOP_ANIMES,
  GET_ANIME_GENRES,
  GET_ANIME_NAME,
  SET_CART_ITEMS,
  ORDER_ANIME_BY_GENRE,
  ORDER_ANIME_BY_CHAPTERS,
  ORDER_ANIME_BY_TITLE,
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
      let response = await axios.get(`http://localhost:3000/manga`);
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
      // let manga = await axios.get(
      //   `http://localhost:3000/manga/searchmanga?name=${name}`
      // );
      dispatch({
        type: GET_MANGA_NAME,
        payload: name,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export const reloadFilters = () => (dispatch) => {
  return dispatch({ type: RELOAD_FILTERS });
};

export const updateCart = (cart) => (dispatch) => {
  return dispatch({ type: UPDATE_CART, payload: cart });
};

export function getGenres() {
  return async function (dispatch) {
    try {
      // let allGenres = await axios.get(`http://localhost:3000/genres`);
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
      let response = await axios.get(`http://localhost:3000/animes`);
      return dispatch({
        type: GET_ANIMES,
        payload: response.data.animesDB,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export const getAnimesDetails = (id) => async (dispatch) => {
  let res = await axios.get(`http://localhost:3000/animes/${id}`);
  return dispatch({ type: GET_ANIME_DETAILS, payload: res.data });
};

export const getTopAnimes = () => async (dispatch) => {
  let res = await axios.get(`http://localhost:3000/topAnimes`);
  return dispatch({ type: GET_TOP_ANIMES, payload: res.data.topAnimesDB });
};

export const getAnimesGenres = () => (dispatch) => {
  return dispatch({ type: GET_ANIME_GENRES });
};

export function getAnimeByTitle(name) {
  return async function (dispatch) {
    try {
      // let animes = await axios.get(
      //   `http://localhost:3000/animes/name?name=${name}`
      // );
      dispatch({
        type: GET_ANIME_NAME,
        payload: name,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

// FILTERS actions

export function filterByGenre(payload) {
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

export function filterAnimeByGenre(payload) {
  return {
    type: ORDER_ANIME_BY_GENRE,
    payload,
  };
}

export function orderAnimeByTitle(payload) {
  return {
    type: ORDER_ANIME_BY_TITLE,
    payload,
  };
}

export function orderAnimeByChapters(payload) {
  return {
    type: ORDER_ANIME_BY_CHAPTERS,
    payload,
  };
}

// OTHERS action

// export function getUsers(email) {
//   const url = `http://localhost:3000/users/${email}`;
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

export const setCategory = (state) => (dispatch) => {
  return dispatch({ type: SET_CATEGORY, payload: state });
};

// CART actions

export const deleteItemCart = (id) => async (dispatch) => {
  let response = await axios.delete(`http://localhost:3000/cart/${id}`);
  return dispatch({ type: DELETE_ITEM_CART, payload: id });
};

export const setCartItems = (item) => async (dispatch) => {
  if (!item.UserId) {
    return dispatch({
      type: SET_CART_ITEMS,
      payload: { Product: item, login: false },
    });
  } else {
    // console.log("hola: ", await axios.post("http://localhost:3000/cart", item));
    let response = await axios.post("http://localhost:3000/cart", item);
    return dispatch({
      type: SET_CART_ITEMS,
      payload: { Product: response.data, login: true },
    });
  }
};

export const getCart = (userId) => async (dispatch) => {
  const res = await axios.get(`http://localhost:3000/cart/${userId}`);
  const response = res.data.map((item) => {
    return { Product: item, login: true };
  });
  return dispatch({
    type: GET_CART,
    payload: response,
  });
};

export function getUsers() {
  return async function (dispatch) {
    try {
      const resp = await animerceApp.get("/users");
      // console.log({ resp });
      dispatch({ type: GET_USERS, payload: resp.data });
    } catch (error) {
      console.log(error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: error.response.data.msg,
      });
    }
  };
}

export function validateUser(obj) {
  return async function (dispatch) {
    try {
      const resp = await animerceApp.post("/auth", obj);
      const { msg, user, token } = resp.data;
      // console.log(msg, user, token);
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("userId", JSON.stringify(user.id));
      dispatch({ type: VALIDATE_USER, payload: user });
      dispatch({ type: IS_ACTIVE, payload: true });
      Swal.fire({
        title: msg,
        showClass: {
          popup: "animate__animated animate__fadeInDown",
        },
        hideClass: {
          popup: "animate__animated animate__fadeOutUp",
        },
      });
      window.location.reload();
    } catch (error) {
      // console.log(error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: error.response.data,
      });
    }
  };
}

export function googleAuth(tokenGoogle) {
  return async function (dispatch) {
    try {
      const resp = await axios.post(`http://localhost:3000/login/auth/google`, {
        id_token: tokenGoogle,
      });
      const { msg, user, token } = resp.data;
      // console.log(msg, user, token);
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("userId", JSON.stringify(user.id));
      console.log(user);
      dispatch({
        type: GOOGLE_AUTH,
        payload: user,
      });
      dispatch({ type: IS_ACTIVE, payload: true });
      Swal.fire({
        title: msg,
        showClass: {
          popup: "animate__animated animate__fadeInDown",
        },
        hideClass: {
          popup: "animate__animated animate__fadeOutUp",
        },
      });
      window.location.reload();
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: error.response.data.msg,
      });
    }
  };
}

export function deleteUser(email) {
  return async function (dispatch) {
    const url = `http://localhost:3000/login/${email}`;
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
        axios.delete(url);
        dispatch({
          type: DELETE_USER,
          payload: email,
        });
      } else if (result.isDenied) {
        Swal.fire("Delete canceled!!");
      }
    });
  };
}

export function logOut() {
  return function (dispatch) {
    dispatch({ type: LOGOUT, payload: {} });
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("userId");
    // window.location.reload();
  };
}

export const getTotalPrice = async (userId) => {
  const { data } = await axios.get(`http://localhost:3000/cart/${userId}`);
  console.log({ data });
};

// REVIEWS ACTIONS

export const getProductReviews = (productId, category) => async (dispatch) => {
  try {
    let response = await axios.get(
      `http://localhost:3000/reviews/byproduct/${productId}?category=${category}`
    );
    return dispatch({ type: GET_REVIEWS_PRODUCT, payload: response.data });
  } catch (err) {
    console.error(err);
  }
};

export const getUserReviews = (userId) => async (dispatch) => {
  try {
    const response = await axios.get(
      `http://localhost:3000/reviews/byuser/${userId}`
    );
    return dispatch({ type: GET_REVIEWS_USER, payload: response.data });
  } catch (err) {
    console.error(err);
  }
};

export const postReview = (review) => async (dispatch) => {
  try {
    const response = await axios.post(`http://localhost:3000/reviews/`, review);
    return dispatch({ type: POST_REVIEW, payload: response.data });
  } catch (err) {
    console.error(err);
  }
};

export const adminDeleteReview = (reviewId) => async (dispatch) => {
  try {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Deleted!", "A review has been deleted.", "success");
        axios.delete(`http://localhost:3000/reviews/admindel/${reviewId}`);
        dispatch({
          type: DELETE_REVIEW_ADMIN,
        });
      } else if (result.isDenied) {
        Swal.fire("Delete canceled!!");
      }
    });
  } catch (err) {
    console.error(err);
  }
};

export const userDeleteReview = (reviewId, userId) => async (dispatch) => {
  try {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Deleted!", "A review has been deleted.", "success");
        axios.delete(
          `http://localhost:3000/reviews/userdel/${reviewId}?userId=${userId}`
        );
        dispatch({
          type: DELETE_REVIEW_USER,
        });
      } else if (result.isDenied) {
        Swal.fire("Delete canceled!!");
      }
    });
  } catch (err) {
    console.error(err);
  }
};

export const refreshReviews = () => (dispatch) => {
  return dispatch({ type: REFRESH_REVIEWS });
};
