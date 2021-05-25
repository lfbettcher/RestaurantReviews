import React from "react"
import { Link } from "react-router-dom"

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
  } = props.restaurant

  return (
    <>
      <h1>
        <Link to={`/restaurants/${id}`}>{name}</Link>
      </h1>
      <img src={imgUrl} alt={name} />
      <p>{websiteUrl}</p>
      <p>{phoneNumber}</p>
      <p>{address}</p>
      <p>{openTime}</p>
      <p>{closeTime}</p>
      <p>{category}</p>
    </>
  )
}

export default RestaurantTile
