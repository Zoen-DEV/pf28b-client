import React from "react";
import { Outlet, Navigate, useLocation } from "react-router-dom";

function AlreadyAuth() {
  const location = useLocation();
  // console.log(localStorage.getItem("token"));
  return !localStorage.getItem("token") ? (
    <Outlet />
  ) : (
    <Navigate to={"/home"} state={{ from: location }} replace />
  );
}

export default AlreadyAuth;
