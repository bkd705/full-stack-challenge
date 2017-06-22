import React, { PropTypes as P } from 'react'
import classnames from 'classnames'

const InputField = ({
  label,
  name,
  value,
  type,
  placeholder,
  onChange,
  error
}) => {
  return (
    <p
      className={classnames('control is-expanded', {
        'has-icon has-icon-right': error
      })}
    >
      <input
        type={type}
        name={name}
        value={value}
        className={classnames('input', {
          'is-danger': error,
          'is-success': helper
        })}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
      />
      {error
        ? <span className="icon is-small"><i className="fa fa-warning" /></span>
        : ''}
      {error ? <span className="help is-danger">{error}</span> : ''}
    </p>
  )
}

InputField.defaultProps = {
  type: 'text'
}

export default InputField
