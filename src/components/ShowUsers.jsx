import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../redux/Actions/actions";
import s from "./ShowUsers.module.css";

const ShowUsers = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);
  const handleClick = () => {
    dispatch(getUsers());
    console.log({ users });
  };

  return (
    <div>
      <button className={s.btn} onClick={() => handleClick()}>
        Obtain Users
      </button>
      <div className={s.contMaster}>
        {users?.map((d) => (
          <div className={s.container}>
            <p className={s.name}>{d.username}</p>
            <p>{d.email}</p>
            <p>{d.cellphone}</p>
            <p>{d.rol}</p>
            <p>{d.isActive}</p>
            <button className={s.btnDelete}>❌</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShowUsers;
