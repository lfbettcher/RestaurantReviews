import React from "react"

const TextInput = (props) => {
  const { label, text, value, onChange, error } = props
  return (
    <label htmlFor={label}>
      {text}
      <input
        id={label}
        type='text'
        name={label}
        onChange={onChange}
        value={value}
      />
      {error && <p style={{ color: "red" }}>{error}</p>}
    </label>
  )
}

export default TextInput
