import React from "react"

const TextInput = (props) => {
  const { label, text, value, onChange, error } = props
  return (
    <label htmlFor={label}>
      {/* <span className="form-title">{text}:</span> */}
      <input
        id={label}
        type='text'
        className="form-input feedback-input"
        name={label}
        onChange={onChange}
        value={value}
        placeholder={text}
      />
      {error && <p style={{ color: "red" }}>{error}</p>}
    </label>
  )
}

export default TextInput
