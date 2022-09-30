import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMangas } from "../redux/Actions/actions";
import MangaCard from "./MangaCard";

const MangaList = () => {
  const dispatch = useDispatch();
  const mangas = useSelector((state) => state.mangas);

  useEffect(() => {
    dispatch(getMangas());
  }, [dispatch]);

  return (
    <div>
      {mangas &&
        mangas.map((m) => (
          <MangaCard
            key={Math.random()}
            title={m.title}
            image={m.image}
            score={m.score}
            popularity={m.popularity}
            synopsis={m.synopsis}
            genres={m.genres}
          />
        ))}
    </div>
  );
};

export default MangaList;
