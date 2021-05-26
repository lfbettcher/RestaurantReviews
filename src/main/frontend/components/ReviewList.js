import React from "react"
import ReviewTile from "./ReviewTile.js"

const ReviewList = (props) => {
  const reviewTiles = props.reviews.map((review) => {
    return <ReviewTile key={review.id} review={review} />
  })

  return (
    <div>
      <h2>Reviews</h2>
      <hr />
      {reviewTiles}
    </div>
  )
}

export default ReviewList
