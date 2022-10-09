import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logOut } from "../redux/Actions/actions";


const Profile = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const userActive = localStorage.getItem("user");
  const user = JSON.parse(userActive)
  return (
    <div>
        <button
          onClick={() => {
            dispatch(logOut());
            navigate("/");
          }}
        >
          LogOut
        </button>
      <h1>Wellcome to your profile</h1>
      <div>
      <h4>Name: </h4>
      <p>{user.username}</p>
      </div>
      <div>
      <img src={user.image} alt={user.username} />
      </div>
      <div>
      <h4>Email: </h4>
      <p>{user.email}</p>
      </div>
      <div>
      <h4>Cellphone: </h4>
      {!user.cellphone ? <p>N/A</p> : user.cellphone}
      </div>
    </div>
  );
};

export default Profile;
