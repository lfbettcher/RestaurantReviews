import React, { useState, useEffect } from "react"
import DBUtils from "../utils/DBUtils.js"
import { Redirect } from "react-router"
import ReviewForm from "./ReviewForm.js"
import ReviewList from "./ReviewList.js"

const RestaurantShow = (props) => {
  const [restaurant, setRestaurant] = useState({})
  const [showForm, setShowForm] = useState(false)
  const [redirect, setRedirect] = useState(false)

  const {
    name,
    imgUrl,
    websiteUrl,
    address,
    phoneNumber,
    openTime,
    closeTime,
    category,
  } = restaurant

  const { id } = props.match.params

  const getRestaurant = async () => {
    const fetchedRestaurant = await DBUtils.fetchData(
      `/api/v1/restaurants/${id}`
    )

    if (!fetchedRestaurant.id) {
      setRedirect(true)
    } else {
      setRestaurant(fetchedRestaurant)
    }
  }

  useEffect(() => {
    getRestaurant()
  }, [])

  const toggleForm = () => {
    setShowForm((showForm) => !showForm)
  }

  return redirect ? (
    <Redirect push to='/not_found' />
  ) : (
    <div>
      <p>{name}</p>
      <p>{imgUrl}</p>
      <p>{websiteUrl}</p>
      <p>{address}</p>
      <p>{phoneNumber}</p>
      <p>{openTime}</p>
      <p>{closeTime}</p>
      <p>{category && category.name}</p>
      {restaurant.id && <ReviewList reviews={restaurant.reviews} />}
      {showForm && <ReviewForm restaurant={restaurant} />}
      <button onClick={toggleForm}>Add Review</button>
    </div>
  )
}

export default RestaurantShow
