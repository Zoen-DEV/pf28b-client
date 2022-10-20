import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getAnimeFavorites, getMangaFavorites } from "../redux/Actions/actions";
import Loader from "./Loader";

const Favorites = () => {

    const dispatch = useDispatch();
    const favs = useSelector((state) => state.favorites)
    const userJSON = localStorage.getItem("user");
    const user = JSON.parse(userJSON);

    useEffect(() => {
        dispatch(getAnimeFavorites(user.id));
        dispatch(getMangaFavorites(user.id));
    }, [dispatch, user.id])

    return (
        <div>
            <div className="products_container">
                <div>
                    <h2>Favorites</h2>
                </div>
                {favs.length > 0 ? (
                    <div className="container">
                        <ul className="ul_slide">
                            {favs.map((item, index) => {
                                return (
                                    <Link
                                        className="link"
                                        to={`/details/${item.id}`}
                                        key={index}
                                    >
                                        <img src={item.image} alt="" />
                                    </Link>
                                );
                            })}
                        </ul>
                    </div>
                ) : (
                    <Loader />
                )}
            </div>
        </div>
    );
}

export default Favorites;