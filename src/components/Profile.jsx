import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Profile = () => {
  // const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  console.log({ user });
  return (
    <div>
      <h3>{user.username}</h3>
    </div>
  );
};

export default Profile;
