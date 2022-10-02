import React, { useEffect } from "react";
import MangaList from "./MangaList";
import { useDispatch, useSelector } from "react-redux";
import { getMangas } from "../redux/Actions/actions";

const Mangas = () => {
  const dispatch = useDispatch();
  const mangas = useSelector((state) => state.mangas);

  useEffect(() => {
    dispatch(getMangas());
  }, [dispatch]);

  return (
    <article>
      {mangas.length > 0 ? (
        <MangaList mangas={mangas}></MangaList>
      ) : (
        <p>loading</p>
      )}
    </article>
  );
};

export default Mangas;
