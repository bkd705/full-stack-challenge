import React from 'react'

const EmployeeRow = ({ employee }) => {
  return (
    <tr>
      <td>{employee.id}</td>
      <td>{employee.email}</td>
      <td>{employee.role}</td>
    </tr>
  )
}

export default EmployeeRow
