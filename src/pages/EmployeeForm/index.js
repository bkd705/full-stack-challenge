import React from 'react'
import './employee.css'
import EmployeeForm from '../../components/EmployeeForm'

const Employee = () => {
  return (
    <div className="create-employee-page">
      <h2 className="subtitle">Create Employee</h2>
      <EmployeeForm />
    </div>
  )
}

export default Employee
