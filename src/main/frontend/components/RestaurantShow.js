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
    <div className="main-content">
      <h1 className="main-title">{name}</h1>
      <div className="restaurant__col">
        <img className="res-img-link" src={imgUrl} />
        <div className="restaurant-container">
          {websiteUrl && <span className="restaurant-title"><a href={websiteUrl} className="restaurant-title-link">Visit Restaurant Website</a></span>}
          <div className="restaurant-info">
            <p>{address}</p>
            <p>{phoneNumber}</p>
            <p>Hours: {openTime}:00 to {closeTime}:00</p>
            <p>{_.startCase(category && category.name)}</p>
          </div>
        </div>
        {restaurant.id && <ReviewList reviews={restaurant.reviews} />}
        {showForm ? <ReviewForm restaurant={restaurant} /> : <div className="form-submit submit">
          <button onClick={toggleForm} id="button-blue">Add Review</button>
          <div className="ease" />
        </div>}
      </div>
    </div>
  )
}

export default RestaurantShow
