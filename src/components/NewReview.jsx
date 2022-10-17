import React from "react";

const NewReview = () => {
  return (
    <form>
      <textarea required placeholder="Add you comment here..."/>
      <input required type="number" name="raiting" max="5" min="1" placeholder="⭐" />
      <button type="submit">send</button>
    </form>
  );
};

export default NewReview;
