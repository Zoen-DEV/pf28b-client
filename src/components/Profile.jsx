import React from "react";
// import { useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { logOut } from "../redux/Actions/actions";
import s from "./styles/Profile.module.css";

const Profile = () => {
  // const dispatch = useDispatch();
  // const navigate = useNavigate();
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
        <div className={s.name}>
          <p>{user.username}</p>
        </div>
        <div>
          <img className={s.image} src={user.image} alt={user.username} />
        </div>
        <div className={s.data}>
          <p>{user.email}</p>
        </div>
        <div className={s.data}>
          <p>Cellphone: </p>
          {!user.cellphone ? <p>N/A</p> : user.cellphone}
        </div>
      </div>
    </div>
  );
};

export default Profile;
