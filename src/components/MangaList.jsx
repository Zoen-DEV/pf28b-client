import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMangas } from "../redux/Actions/actions";
import MangaCard from "./MangaCard";

const AnimeList = () => {

    const dispatch = useDispatch()

    useEffect( () => {
        dispatch(getMangas())
    }, [])

    const animes = useSelector((state) => state.rootReducer.animes)

    return(
        <div>
            {animes && animes.map( a =>
                    <MangaCard key={Math.random()}
                        title={a.title}
                        image={a.image}
                        score={a.score}
                        popularity={a.popularity}
                        synopsis={a.synopsis}
                        genres={a.genres} />
                )
            }
        </div>
    )
}

export default AnimeList;