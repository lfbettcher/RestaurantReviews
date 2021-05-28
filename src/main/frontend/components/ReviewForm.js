import _ from "lodash";
import React, { useState } from "react";
import DBUtils from "../utils/DBUtils.js";
import TextInput from "./TextInput.js";
import TextArea from "./TextArea.js";
import SuccessTile from "./SuccessTile.js";
import StarRating from "./StarRating";

const ReviewForm = (props) => {
  const INITIAL_STATE = {
    reviewerName: "",
    starRating: "",
    review: "",
    restaurant: props.restaurant,
  };

  const [starRating, setStarRating] = useState(0);
  const [values, setValues] = useState(INITIAL_STATE);
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.currentTarget
    e.preventDefault();
    setValues({ ...values, [name]: value });
  };

  const changeStar = (e) => {
    const ratingValue = e.currentTarget.value;
    setStarRating(ratingValue);  // this updates the yellow star immediately
    setValues({ ...values, starRating: ratingValue });  // for form
  }

  const handleSuccess = () => {
    setSuccess(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const fields = ["reviewerName", "starRating", "review"];

    if (DBUtils.isValid(fields, values, setErrors)) {
      const response = await DBUtils.postData("/api/v1/reviews", values);

      if (_.isEmpty(response)) {
        setValues(INITIAL_STATE);
        handleSuccess();
      } else {
        setErrors(response);
      }
    }
  };

  return success ? (
    <SuccessTile />
  ) : (
    <div className="review-form-div">
      <form onSubmit={handleSubmit}>
        <div className="review-form-input">
          <TextInput
            className="feedback-input"
            label="reviewerName"
            text="Name: "
            onChange={handleChange}
            value={values.reviewerName}
            error={errors.reviewerName}
          />
        </div>
        <br />
        <div className="review-form-input">
          <StarRating
            className="feedback-input"
            onChange={changeStar}
            starRating={starRating}
            error={errors.starRating}
          />
        </div>
        <br />
        <div className="review-form-input">
          <TextArea
            className="feedback-input"
            label="review"
            text="Review: "
            onChange={handleChange}
            value={values.review}
            error={errors.review}
          />
        </div>
        <br />
        <br />
        <div className="submit">
          <input className="submit" type="submit" value="Submit" id="button-blue" />
          <div className="ease" />
        </div>
      </form>
    </div>
  );
};

export default ReviewForm;
