import React, { useState, useEffect } from "react"
import RestaurantTile from "./RestaurantTile.js"
import DBUtils from "../utils/DBUtils.js"

const RestaurantList = () => {
  const [restaurants, setRestaurants] = useState([])

  const getRestaurants = async () => {
    const data = await DBUtils.fetchData(`/api/v1/restaurants`)
    setRestaurants(data)
  }

  useEffect(() => {
    getRestaurants()
  }, [])

  const restaurantTiles = restaurants.map((restaurant) => {
    return <RestaurantTile key={restaurant.id} restaurant={restaurant} />
  })

  return (
    <div className="main-content">
      <h1 className="main-title">Restaurants</h1>
      {/* <hr /> */}
      <section className="restaurants">
        <div className="restaurants__row">
          {restaurantTiles}
        </div>
      </section>
    </div>
  )
}

export default RestaurantList
