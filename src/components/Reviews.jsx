import React, { useState } from "react";

const Reviews = ({ reviews }) => {
  const [stars, setStars] = useState();
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
          </li>
        );
      })}
    </ul>
  );
};

export default Reviews;
