import React from "react"

const ReviewTile = (props) => {
  const { reviewerName, starRating, review, restaurant } = props.review
  return (
    <>
      <p>{reviewerName}</p>
      <p>{starRating}</p>
      <p>{review}</p>
      <p>{restaurant && restaurant.name}</p>
    </>
  )
}

export default ReviewTile
