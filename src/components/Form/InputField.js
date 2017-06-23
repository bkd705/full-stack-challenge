import React from 'react'

const InputField = ({ name, value, type, placeholder, onChange }) => {
  return (
    <p className="control is-expanded">
      <input
        type={type}
        name={name}
        value={value}
        className="input"
        placeholder={placeholder}
        onChange={onChange}
      />
    </p>
  )
}

InputField.defaultProps = {
  type: 'text'
}

export default InputField
