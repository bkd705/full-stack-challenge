import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import axios from 'axios'
import InputField from '../Form/InputField'

// @TODO - Make this dynamic to both updating and creating

class EmployeeForm extends Component {
  state = {
    email: '',
    password: ''
  }

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onSubmit = async e => {
    e.preventDefault()
    const response = await axios.post('/employees', this.state)
    if (response.status === 200) {
      this.props.history.push('/')
    }
  }

  render() {
    const { email, password } = this.state
    return (
      <form onSubmit={this.onSubmit}>
        <InputField
          name="email"
          value={email}
          placeholder="E-Mail..."
          onChange={this.onChange}
        />

        <InputField
          name="password"
          value={password}
          placeholder="Password..."
          type="password"
          onChange={this.onChange}
        />

        <p className="control">
          <button type="submit" className="button is-primary">
            Add Employee
          </button>
        </p>
      </form>
    )
  }
}

export default withRouter(EmployeeForm)
