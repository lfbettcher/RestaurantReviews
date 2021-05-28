import React from "react"
import StarRatingStatic from "./StarRatingStatic";

const ReviewTile = (props) => {
  const { reviewerName, starRating, review, restaurant } = props.review
  return (
    <>
      <p><b>{reviewerName}</b></p>
      <StarRatingStatic starRating={starRating} />
      <p>{review}</p>
      <p>{restaurant && restaurant.name}</p>
      <br />
    </>
  )
}

export default ReviewTile
