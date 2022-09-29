import axios from 'axios'
import { GET_ANIMES, GET_MANGAS } from './Constants/animes' 

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