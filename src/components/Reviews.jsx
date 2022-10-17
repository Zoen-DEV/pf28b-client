import React from "react";
import NewReview from "./NewReview";

const Reviews = ({ reviews }) => {
  return (
    <div>
      <ul>
        {reviews?.map((item) => {
          return (
            <li>
              <div className="user_info_container">
                <h2>{item.username}</h2>
                <img src={item.userImg} alt="" />
              </div>
              <div className="rating">
                {Array.apply(null, { length: item.rating })?.map((item) => {
                  return <p>⭐</p>;
                })}
              </div>

              <p>{item.comment}</p>
            </li>
          );
        })}
      </ul>
      {/* <NewReview></NewReview> */}
    </div>
  );
};

export default Reviews;
