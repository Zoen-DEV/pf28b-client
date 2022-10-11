import React from "react";
import { Outlet, Navigate, useLocation } from "react-router-dom";

function RequireAuth() {
  const location = useLocation();
  console.log(localStorage.getItem("token"));
  return localStorage.getItem("token") ? <Outlet /> : <Navigate to={"/login"} state={{ from: location }} replace />;
}

export default RequireAuth;
