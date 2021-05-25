import React, { useState, useEffect } from "react"
import RestaurantTile from "./RestaurantTile.js"
import DBUtils from "../utils/DBUtils.js"

const RestaurantList = () => {
  const [restaurants, setRestaurants] = useState([])

  const getRestaurants = async () => {
    const data = await DBUtils.fetchData(`/api/v1/restaurants`)
    if (typeof data === "object") {
      //redirect to 404
    } else {
      setRestaurants(data)
    }
  }

  useEffect(() => {
    getRestaurants()
  }, [])

  const restaurantTiles = restaurants.map((restaurant) => {
    return <RestaurantTile key={restaurant.id} restaurant={restaurant} />
  })

  return (
    <div>
      <h1>Restaurants</h1>
      <hr />
      {restaurantTiles}
    </div>
  )
}

export default RestaurantList
