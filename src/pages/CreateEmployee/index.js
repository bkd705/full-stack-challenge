import React from 'react'
import './createemployee.css'
import EmployeeForm from '../../components/EmployeeForm'

const CreateEmployee = () => {
  return (
    <div className="create-employee-page">
      <h2 className="subtitle">Create Employee</h2>
      <EmployeeForm />
    </div>
  )
}

export default CreateEmployee
