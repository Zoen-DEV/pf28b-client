import axios from "axios";

export const GET_DETAILS = "GET_DETAILS";
export const DELETE_DETAILS = "DELETE_DETAILS";

export const getDetails = (id) => async (dispatch) => {
  try {
    let productDetail = await axios(`http://localhost:3001/manga/${id}`);
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
