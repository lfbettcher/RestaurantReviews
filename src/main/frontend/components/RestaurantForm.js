import _ from "lodash"
import React, { useState } from "react"
import DBUtils from "../utils/DBUtils.js"
import TextInput from "./TextInput"
import { Redirect } from "react-router"

const RestaurantForm = () => {
  const INITIAL_STATE = {
    name: "",
    imgUrl: "",
    websiteUrl: "",
    address: "",
    phoneNumber: "",
    openTime: "",
    closeTime: "",
    category: "",
  }

  const [values, setValues] = useState(INITIAL_STATE)
  const [errors, setErrors] = useState({})
  const [success, setSuccess] = useState(false)

  const handleChange = (e) => {
    e.preventDefault()
    setValues({ ...values, [e.currentTarget.name]: e.currentTarget.value })
  }

  const handleSuccess = () => {
    setSuccess(true)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (DBUtils.isValid(Object.keys(INITIAL_STATE), values, setErrors)) {
      const newRestaurant = { ...values, category: { name: values.category } }
      const response = await DBUtils.postData(
        "/api/v1/restaurants",
        newRestaurant
      )

      if (_.isEmpty(response)) {
        setValues(INITIAL_STATE)
        handleSuccess()
      } else {
        setErrors(response)
      }
    }
  }

  if (success) {
    return <Redirect push to='/restaurants' />
  }

  return (
    <div className="form-main" >
      <h1 className="main-title">Add a Restaurant</h1>
      <div className="form-div">
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-input">
            <TextInput
              label='name'
              text='Name'
              onChange={handleChange}
              value={values.name}
              error={errors.name}
            />
          </div>
          <br />
          <div className="form-input">
            <TextInput
              label='imgUrl'
              text='Image Url'
              onChange={handleChange}
              value={values.imgUrl}
              error={errors.imgUrl}
            />
          </div>
          <br />
          <div className="form-input">
            <TextInput
              label='websiteUrl'
              text='Website Url'
              onChange={handleChange}
              value={values.websiteUrl}
              error={errors.websiteUrl}
            />
          </div>
          <br />
          <div className="form-input">
            <TextInput
              label='phoneNumber'
              text='Phone'
              onChange={handleChange}
              value={values.phoneNumber}
              error={errors.phoneNumber}
            />
          </div>
          <br />
          <div className="form-input">
            <TextInput
              label='address'
              text='Address'
              onChange={handleChange}
              value={values.address}
              error={errors.address}
            />
          </div>
          <br />
          <div className="form-input">
            <TextInput
              label='category'
              text='Category'
              onChange={handleChange}
              value={values.category}
              error={errors.category}
            />
          </div>
          <br />
          <div className="form-input">
            <TextInput
              label='openTime'
              text='Opening Time'
              onChange={handleChange}
              value={values.openTime}
              error={errors.openTime}
            />
          </div>
          <br />
          <div className="form-input">
            <TextInput
              label='closeTime'
              text='Closing Time'
              onChange={handleChange}
              value={values.closeTime}
              error={errors.closeTime}
            />
          </div>
          <br />
          <div className="submit">
            <input type='submit' value='Submit' id="button-blue" />
            <div className="ease" />
          </div>
        </form>
      </div>
    </div>
  )
}

export default RestaurantForm
