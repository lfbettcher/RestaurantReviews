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
    <form onSubmit={handleSubmit}>
      <TextInput
        label='name'
        text='Name: '
        onChange={handleChange}
        value={values.name}
        error={errors.name}
      />
      <br />
      <TextInput
        label='imgUrl'
        text='Image Url: '
        onChange={handleChange}
        value={values.imgUrl}
        error={errors.imgUrl}
      />
      <br />
      <TextInput
        label='websiteUrl'
        text='Website Url: '
        onChange={handleChange}
        value={values.websiteUrl}
        error={errors.websiteUrl}
      />
      <br />
      <TextInput
        label='phoneNumber'
        text='Phone: '
        onChange={handleChange}
        value={values.phoneNumber}
        error={errors.phoneNumber}
      />
      <br />
      <TextInput
        label='address'
        text='Address: '
        onChange={handleChange}
        value={values.address}
        error={errors.address}
      />
      <br />
      <TextInput
        label='category'
        text='Category: '
        onChange={handleChange}
        value={values.category}
        error={errors.category}
      />
      <br />
      <TextInput
        label='openTime'
        text='Opening Time: '
        onChange={handleChange}
        value={values.openTime}
        error={errors.openTime}
      />
      <br />
      <TextInput
        label='closeTime'
        text='Closing Time: '
        onChange={handleChange}
        value={values.closeTime}
        error={errors.closeTime}
      />
      <br />

      <input className='submit-btn' type='submit' value='Submit' />
    </form>
  )
}

export default RestaurantForm
