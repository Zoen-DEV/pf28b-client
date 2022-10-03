import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMangas, getGenres } from "../redux/Actions/actions";

const Filters = ({ byTitle, byGenre, byChapters }) => {
  const dispatch = useDispatch();
  const allGenres = useSelector((state) => state.genres);

  function handleClick(e) {
    e.preventDefault();
    dispatch(getMangas());
  }

  useEffect(() => {
    dispatch(getMangas());
    dispatch(getGenres());
  }, [dispatch]);

  return (
    <div className="filters_container">
      <button
        className="btnreload"
        onClick={(e) => {
          handleClick(e);
        }}
      >
        RELOAD MANGAS
      </button>
      <div className="cntselect">
        <select className="select" onChange={(e) => byTitle(e)}>
          <option value="alpha" key="alpha">
            Order alphabetically
          </option>
          <option value="asc" key="asc">
            A to Z
          </option>
          <option value="desc" key="desc">
            Z to A
          </option>
        </select>
        <select className="select" onChange={(e) => byChapters(e)}>
          <option value="order" key="order">
            Order by chapters
          </option>
          <option value="chapters asc" key="chapters asc">
            chapters asc
          </option>
          <option value="chapters desc" key="chapters desc">
            chapters desc
          </option>
        </select>
        <select className="select" onChange={(e) => byGenre(e)}>
          <option value="All">Select Genre</option>
          {allGenres &&
            allGenres.map((e, index) => {
              return (
                <option key={index} value={e}>
                  {e}
                </option>
              );
            })}
        </select>
      </div>
    </div>
  );
};

export default Filters;
