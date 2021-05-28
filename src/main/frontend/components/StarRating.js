import React from "react";

const StarRating = ({ onChange, starRating, error }) => {
  return (
    <>
      <label htmlFor="rating" className="form-input feedback-input">
        Rating:
        <fieldset id="rating">
          <div className="rate">
            <input
              type="radio"
              id="star5"
              name="rating"
              value="5"
              onChange={onChange}
              checked={starRating === "5"}
            />
            <label htmlFor="star5">5 stars</label>
            <input
              type="radio"
              id="star4"
              name="rating"
              value="4"
              onChange={onChange}
              checked={starRating === "4"}
            />
            <label htmlFor="star4">4 stars</label>
            <input
              type="radio"
              id="star3"
              name="rating"
              value="3"
              onChange={onChange}
              checked={starRating === "3"}
            />
            <label htmlFor="star3">3 stars</label>
            <input
              type="radio"
              id="star2"
              name="rating"
              value="2"
              onChange={onChange}
              checked={starRating === "2"}
            />
            <label htmlFor="star2">2 stars</label>
            <input
              type="radio"
              id="star1"
              name="rating"
              value="1"
              onChange={onChange}
              checked={starRating === "1"}
            />
            <label htmlFor="star1">1 star</label>
          </div>
        </fieldset>
      </label>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </>
  );
};

export default StarRating;
