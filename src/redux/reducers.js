import { GET_ANIMES, GET_MANGAS } from "./Constants/animes";

const initialState = {
    animes: [],
    mangas: []
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ANIMES:
            return {
                ...state,
                animes: action.payload
            }

        case GET_MANGAS:
            return {
                ...state,
                mangas: action.payload
            }
        
        default:
            return state;
    }
}


export default rootReducer;