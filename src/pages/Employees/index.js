import React from 'react'
import { Link } from 'react-router-dom'
import EmployeesList from '../../components/Employees'

const Employees = () => {
  return (
    <div className="employee-page container">
      <h2 className="subtitle">Employees</h2>
      <Link to="/employees/create" className="button is-primary is-small">
        Add
      </Link>
      <EmployeesList />
    </div>
  )
}

export default Employees
