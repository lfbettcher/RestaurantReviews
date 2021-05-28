import React from "react"
import ReviewTile from "./ReviewTile.js"

const ReviewList = (props) => {
  const reviewTiles = props.reviews.map((review) => {
    return <ReviewTile key={review.id} review={review} />
  })

  return (
    <div className="review-container">
      <span class="restaurant-title">Reviews</span>
      {/* <hr /> */}
      <div class="review-info">
        {reviewTiles}
      </div>
    </div>
  )
}

export default ReviewList
