import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { deleteUser, getUsers } from "../redux/Actions/actions";
import Chart from "./Chart";
import Sales from "./Sales";
import s from "./styles/Admin.module.css";

const Admin = () => {
  const userActive = localStorage.getItem("user");
  const user = JSON.parse(userActive);
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);
  // console.log(users);
  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  return (
    <div>
      <h1 className={s.title}>Welcome to the Admin page</h1>
      <div className={s.contMaster}>
        {users?.map((d) => (
          <div className={s.card}>
            <img className={s.image} src={d.image} alt="" />
            <div className={s.data1}>
              <div className={s.data}>
                <p className={s.blackFont}>ID: </p>
                <p>{d.id}</p>
              </div>

              <div className={s.data}>
                <p className={s.blackFont}>Name: </p>
                <p className={s.name}>{d.username}</p>
              </div>

              <div className={s.data}>
                <p className={s.blackFont}>Email: </p>
                <p>{d.email}</p>
              </div>
            </div>

            <div className={s.data2}>
              <div className={s.data}>
                <p className={s.blackFont}>Cellphone: </p>
                {!d.cellphone ? <p>N/A</p> : <p>{d.cellphone}</p>}
              </div>

              <div className={s.data}>
                <p className={s.blackFont}>Is Admin?: </p>
                {!d.isAdmin ? <p>false</p> : <p>true</p>}
              </div>

              <div className={s.data}>
                <p className={s.blackFont}>Active?: </p>
                {!d.isActive ? <p>false</p> : <p>true</p>}
              </div>
            </div>

            <button
              onClick={() => {
                if (user.email === d.email) {
                  Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "You cannot delete the user with which you are logged in!!",
                  });
                } else dispatch(deleteUser(d.email));
              }}
              className={s.btnDelete}
            >
              <ion-icon name="trash-outline"></ion-icon>
            </button>
          </div>
        ))}
      </div>
      <div>
        <Sales />
      </div>
      <div className={s.chart}>
        <Chart />
      </div>
    </div>
  );
};

export default Admin;
