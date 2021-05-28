import React from "react"
import ReviewTile from "./ReviewTile.js"

const ReviewList = (props) => {
  const reviewTiles = props.reviews.map((review) => {
    return <ReviewTile key={review.id} review={review} />
  })

  return (
    <div className='review-container'>
      <span className='restaurant-title'>Reviews</span>
      {/* <hr /> */}
      <div className='review-info'>{reviewTiles}</div>
    </div>
  )
}

export default ReviewList
