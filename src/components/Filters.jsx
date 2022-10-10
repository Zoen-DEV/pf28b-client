import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAnimesGenres,
  getGenres,
  // getMangas,
  reloadFilters,
} from "../redux/Actions/actions";
// import Autocomplete from "@mui/material/Autocomplete";
// import TextField from "@mui/material/TextField";
// import Loader from "./Loader";

const Filters = ({ byTitle, byGenre, byChapters, product }) => {
  const dispatch = useDispatch();
  const select1Ref = useRef();
  const select2Ref = useRef();
  const select3Ref = useRef();
  const allGenres = useSelector((state) => state.genres);
  const [filterOn, setFilterOn] = useState(false);
  const category = useSelector((state) => state.category);

  useEffect(() => {
    dispatch(getGenres());
    dispatch(getAnimesGenres());
  }, [dispatch]);

  function handleClick(e) {
    e.preventDefault();
    select1Ref.current.value = "alpha";
    select2Ref.current.value = "order";
    select3Ref.current.value = "All";
    setFilterOn(false);
  }
  return category.id === 1 ? (
    <div className="filters_container">
      <div className="filters_title_container">
        <h2>
          <i className="bi bi-sliders"></i> FILTERS
        </h2>
        {filterOn || product.length < 100 ? (
          <button
            className="btnreload bi bi-arrow-clockwise"
            onClick={(e) => {
              dispatch(reloadFilters());
              handleClick(e)
            }}
          ></button>
        ) : (
          <div></div>
        )}
      </div>

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
          <div className="select_arrow"></div>
        </div>

        {/* <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={["Ascending (A to Z)", "Descending (Z to A)"]}
          sx={{ width: 300 }}
          renderInput={(params) => (
            <TextField {...params} label="Select Genre" />
          )}
        /> */}
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
          <div className="select_arrow"></div>
        </div>
        {/* {allGenres.length > 0 ? (
          <Autocomplete
            getOptionSelected={(option, value) => option === value}
            disablePortal
            id="combo-box-demo"
            options={allGenres}
            sx={{ width: 300 }}
            onChange={(e) => {
              byGenre(e);
              setFilterOn(true);
            }}
            renderInput={(params) => (
              <TextField {...params} label="Select Genre" />
            )}
          />
        ) : (
          <Loader />
        )} */}

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
          <div className="select_arrow"></div>
        </div>
      </div>
    </div>
  ) : (
    // ACA ESTA EL CENTRO ///////////////////////////////////////////
    <div className="filters_container">
      <div className="filters_title_container">
        <h2>
          <i className="bi bi-sliders"></i> FILTERS
        </h2>
        {filterOn ? (
          <button
            className="btnreload bi bi-arrow-clockwise"
            onClick={(e) => {
              handleClick(e);
            }}
          ></button>
        ) : (
          <div></div>
        )}
      </div>

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
          <div className="select_arrow"></div>
        </div>

        {/* <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={["Ascending (A to Z)", "Descending (Z to A)"]}
          sx={{ width: 300 }}
          renderInput={(params) => (
            <TextField {...params} label="Select Genre" />
          )}
        /> */}
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
          <div className="select_arrow"></div>
        </div>
        {/* {allGenres.length > 0 ? (
          <Autocomplete
            getoptionselected={(option, value) => option === value}
            disablePortal
            id="combo-box-demo"
            options={allGenres}
            sx={{ width: 300 }}
            onChange={(e) => {
              byGenre(e);
              setFilterOn(true);
            }}
            renderInput={(params) => (
              <TextField {...params} label="Select Genre" />
            )}
          />
        ) : (
          <Loader />
        )} */}

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
          <div className="select_arrow"></div>
        </div>
      </div>
    </div>
  );
};

export default Filters;
