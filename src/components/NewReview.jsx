import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { postReview } from "../redux/Actions/actions";

const NewReview = () => {
  const initialState = {
    productId: 0,
    comment: "",
    rating: 1,
    UserId: 0,
    category: "",
  };
  const dispatch = useDispatch();
  const [toSend, setToSend] = useState(initialState);
  const categoryLs = localStorage.getItem("category");
  const userLs = localStorage.getItem("user");
  const category = JSON.parse(categoryLs);
  const user = JSON.parse(userLs);
  const id = useParams().id;
  const navigate = useNavigate();

  useEffect(() => {
    setToSend({
      ...toSend,
      category: category.type,
      productId: id,
      UserId: user ? user.id : null,
    });
  }, [category.type, id, user]);

  const dropRating = (e) => {
    switch (e.target.name) {
      case "1":
        setToSend({
          ...toSend,
          rating: 1,
        });
        break;
      case "2":
        setToSend({
          ...toSend,
          rating: 2,
        });
        break;
      case "3":
        setToSend({
          ...toSend,
          rating: 3,
        });
        break;
      case "4":
        setToSend({
          ...toSend,
          rating: 4,
        });
        break;
      case "5":
        setToSend({
          ...toSend,
          rating: 5,
        });
        break;
      default:
        break;
    }
  };

  const handleChange = (e) => {
    setToSend({
      ...toSend,
      comment: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (toSend.comment.trim().length === 0) {
      Swal.fire(
        "The comment input cannot be empty",
        "Please add a comment",
        "question"
      );
    } else if (!user) {
      Swal.fire({
        title: "Error!",
        text: "You must be logged in to add a comment!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Log in!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login");
        }
      });
    } else {
      setToSend(initialState);
      dispatch(postReview(toSend));
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        required
        placeholder="Add you comment here..."
        onChange={handleChange}
        value={toSend.comment}
      />
      <div className="rating">
        <button
          type="button"
          onClick={dropRating}
          style={{ color: "#ffa500" }}
          name="1"
          className="bi bi-star-fill"
        ></button>
        <button
          type="button"
          onClick={dropRating}
          style={
            toSend.rating >= 2 ? { color: "#ffa500" } : { color: "#232323" }
          }
          name="2"
          className="bi bi-star-fill"
        ></button>
        <button
          type="button"
          onClick={dropRating}
          style={
            toSend.rating >= 3 ? { color: "#ffa500" } : { color: "#232323" }
          }
          name="3"
          className="bi bi-star-fill"
        ></button>
        <button
          type="button"
          onClick={dropRating}
          style={
            toSend.rating >= 4 ? { color: "#ffa500" } : { color: "#232323" }
          }
          name="4"
          className="bi bi-star-fill"
        ></button>
        <button
          type="button"
          onClick={dropRating}
          style={
            toSend.rating >= 5 ? { color: "#ffa500" } : { color: "#232323" }
          }
          name="5"
          className="bi bi-star-fill"
        ></button>
      </div>
      <button className="send_review" type="submit">
        send
      </button>
    </form>
  );
};

export default NewReview;
