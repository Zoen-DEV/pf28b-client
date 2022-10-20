import React from "react";
import { useDispatch } from "react-redux";
import { adminDeleteReview, userDeleteReview } from "../redux/Actions/actions";

const Reviews = ({ reviews }) => {
  const userJSON = localStorage.getItem("user");
  const user = JSON.parse(userJSON);
  const dispatch = useDispatch();

  const deleteReview = (e, id, UserId) => {
    if (user.isAdmin) {
      dispatch(adminDeleteReview(id));
    } else {
      dispatch(userDeleteReview(id, UserId));
    }
  };

  return (
    <ul>
      {reviews?.map((item) => {
        return (
          <li key={item.id}>
            <div className="user_info_container">
              <img src={item.userImg} alt="" />
              <h2>{item.username}</h2>
              {Array.apply(null, { length: item.rating })?.map((j, index) => {
                let random = Math.floor(Math.random() * 100000);
                return <div key={random}>⭐</div>;
              })}
            </div>
            <p>{item.comment}</p>
            {user.isAdmin || user.id === item.UserId ? (
              <button onClick={(e) => deleteReview(e, item.id, item.UserId)}>
                <i className="bi bi-trash3"></i>
              </button>
            ) : (
              <div></div>
            )}
          </li>
        );
      })}
    </ul>
  );
};

export default Reviews;
