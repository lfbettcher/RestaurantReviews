import React from "react"

const TextArea = (props) => {
  const { label, text, value, onChange, error } = props
  return (
    <label htmlFor={label}>
      <textarea
        id={label}
        rows={5}
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

export default TextArea
