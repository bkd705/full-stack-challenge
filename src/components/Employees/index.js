import React, { Component } from 'react'
import axios from 'axios'
import EmployeeRow from './EmployeeRow'

class Employees extends Component {
  state = {
    employees: []
  }

  componentDidMount() {
    this.fetchEmployees()
  }

  fetchEmployees = async () => {
    const response = await axios.get('/employees')
    this.setState({ employees: response.data.users })
  }

  render() {
    const { employees } = this.state
    const employeeList = employees.map(e =>
      <EmployeeRow employee={e} key={e.id} />
    )
    return (
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Email</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          {employeeList}
        </tbody>
      </table>
    )
  }
}

export default Employees
