import React from "react";
import { Link } from "react-router-dom";
import StarRatingStatic from "./StarRatingStatic";

const RestaurantTile = (props) => {
  const {
    id,
    name,
    imgUrl,
    websiteUrl,
    phoneNumber,
    address,
    openTime,
    closeTime,
    category,
    reviews
  } = props.restaurant;

  const avgRating = reviews.reduce((sum, r) => (sum + parseInt(r.starRating)), 0) / reviews.length;
  const roundedRating = isNaN(avgRating) ? 0 : Math.round(avgRating);

  return (
    <>
      {/* <h1>
        <Link to={`/restaurants/${id}`}>{name}</Link>
      </h1>
      <img src={imgUrl} alt={name} /> */}
      <div className="restaurants__col">
        <Link to={`/restaurants/show/${id}`}>
          <img className="img-link" src={imgUrl} />
        </Link>
        <div className="restaurants-container">
          <span className="restaurants__name"><Link to={`/restaurants/show/${id}`} className="restaurants__name-link">{name}</Link></span>
          <StarRatingStatic starRating={roundedRating} /><br />
          {websiteUrl && <span className="restaurants-website"><a href={websiteUrl} className="restaurants-website-link">Visit restaurant website</a></span>}
          <p>{phoneNumber}</p>
          <p>{address}</p>
          <p>
            Hours: {openTime}:00 to {closeTime}:00
          </p>
          <p>{_.startCase(category.name)}</p>
        </div>
      </div>
    </>
  );
};

export default RestaurantTile;
