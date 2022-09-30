import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAnimes } from "../redux/Actions/actions";
import AnimeCard from "./AnimeCard";

const AnimeList = () => {

    const dispatch = useDispatch()

    useEffect( () => {
        dispatch(getAnimes())
    }, [])

    const animes = useSelector((state) => state.rootReducer.animes)

    return(
        <div>
            {animes && animes.map( a =>
                    <AnimeCard key={Math.random()}
                        title={a.title}
                        image={a.image}
                        release={a.release}
                        rating={a.rating}
                        description={a.description}
                        genres={a.genres} />
                )
            }
        </div>
    )
}

export default AnimeList;