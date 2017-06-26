import React from 'react'
import { Link } from 'react-router-dom'

const EmployeeRow = ({ employee }) => {
  return (
    <tr>
      <td>{employee.id}</td>
      <td>{employee.email}</td>
      <td>{employee.role}</td>
      <td>
        <Link
          to={`/employees/${employee.id}/update`}
          className="button is-info"
        >
          Edit
        </Link>
      </td>
    </tr>
  )
}

export default EmployeeRow
