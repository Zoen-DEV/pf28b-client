import React, { useRef, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMangas, getGenres } from "../redux/Actions/actions";

const Filters = ({ byTitle, byGenre, byChapters }) => {
  const dispatch = useDispatch();
  const select1Ref = useRef();
  const select2Ref = useRef();
  const select3Ref = useRef();
  const allGenres = useSelector((state) => state.genres);
  const [filterOn, setFilterOn] = useState(false);

  function handleClick(e) {
    e.preventDefault();
    dispatch(getMangas());
    select1Ref.current.value = "alpha";
    select2Ref.current.value = "order";
    select3Ref.current.value = "All";
    setFilterOn(false);
  }

  useEffect(() => {
    dispatch(getMangas());
    dispatch(getGenres());
  }, [dispatch]);

  return (
    <div className="filters_container">
      {filterOn ? (
        <button
          className="btnreload"
          onClick={(e) => {
            handleClick(e);
          }}
        >
          RELOAD MANGAS
        </button>
      ) : (
        <div></div>
      )}

      <div className="cntselect">
        <div className="select">
          <select
            className="select"
            ref={select1Ref}
            onChange={(e) => {
              byTitle(e);
              setFilterOn(true);
            }}
          >
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
          <div class="select_arrow"></div>
        </div>
        <div className="select">
          <select
            className="select"
            ref={select2Ref}
            onChange={(e) => {
              byChapters(e);
              setFilterOn(true);
            }}
          >
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
          <div class="select_arrow"></div>
        </div>

        <div className="select">
          <select
            className="select"
            ref={select3Ref}
            onChange={(e) => {
              byGenre(e);
              setFilterOn(true);
            }}
          >
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
          <div class="select_arrow"></div>
        </div>
      </div>
    </div>
  );
};

export default Filters;
