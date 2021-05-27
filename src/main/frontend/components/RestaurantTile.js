import React from "react";
import { Link } from "react-router-dom";

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
  } = props.restaurant;

  return (
    <>
      {/* <h1>
        <Link to={`/restaurants/${id}`}>{name}</Link>
      </h1>
      <img src={imgUrl} alt={name} /> */}
      <div className="restaurants__col">
        <img className="img-link" src={imgUrl}></img>
        <div className="restaurants-container">
          <span className="restaurants__name"><Link to={`/restaurants/${id}`} className="restaurants__name-link">{name}</Link></span>
          <a href={websiteUrl}>Visit restaurant website</a>
          {/* <p>{websiteUrl}</p> */}
          <p>{phoneNumber}</p>
          <p>{address}</p>
          <p>
            Hours: {openTime} to {closeTime}
          </p>
          <p>{category.name}</p>
        </div>
      </div>
    </>
  );
};

export default RestaurantTile;
