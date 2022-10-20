import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Favorites from "./Favorites";
// import { logOut } from "../redux/Actions/actions";
import s from "./styles/Profile.module.css";

const Profile = () => {
  // const dispatch = useDispatch();
  const navigate = useNavigate();
  const favs = useSelector((state) => state.favorites)
  const userActive = localStorage.getItem("user");
  const user = JSON.parse(userActive);

  return (
    <div className={s.container}>
      {/* <button
        className={s.btnLogout}
        onClick={() => {
          dispatch(logOut());
          navigate("/");
        }}
      >
        LogOut
      </button> */}

      <div className={s.card}>
        <img className={s.image} src={user.image} alt="" />
        <div className={s.name}>
          <p>{user.username}</p>
        </div>
        <div className={s.data}>
          <p>{user.email}</p>
        </div>
        <div className={s.data}>
          <p>Cellphone: </p>
          {!user.cellphone ? <p>N/A</p> : user.cellphone}
        </div>
        <div>
          <button
            onClick={() => {
            navigate("/profile/edit");
            }}
          >
            Edit Profile
          </button>
        </div>
      </div>
      {favs.length > 0 ? <Favorites /> : null}
    </div>
  );
};

export default Profile;
