import axios from "axios";
import { GET_ANIMES, GET_MANGAS, GET_DETAILS, DELETE_DETAILS } from '../Constants/animes' 


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

export function getAnimes(){
    return async function (dispatch){
        try{
            let response = await axios.get('http://localhost:3000/animes')
            dispatch({
                type: GET_ANIMES,
                payload: response.data
            })
        }catch(error){
            console.log(error)
        }
    }
}

export function getMangas(){
    return async function (dispatch){
        try{
            let response = await axios.get('http://localhost:3000/manga')
            dispatch({
                type: GET_MANGAS,
                payload: response.data
            })
        }catch(error){
            console.log(error)
        }
    }
}
