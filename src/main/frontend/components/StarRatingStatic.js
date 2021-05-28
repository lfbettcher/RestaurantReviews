import React from "react";

const StarRatingStatic = ({ starRating }) => {
  const starImages = [
    "https://i.ibb.co/cwQDrRr/stars1.png",
    "https://i.ibb.co/0Qy6rdS/stars2.png",
    "https://i.ibb.co/Lvg3NgQ/stars3.png",
    "https://i.ibb.co/k4fPCVy/stars4.png",
    "https://i.ibb.co/YQY3VdW/stars5.png"
  ]
  const stars = parseInt(starRating);

  return (
    <img className="star-rating-img" src={starImages[stars - 1]} />
  );
};

export default StarRatingStatic;
