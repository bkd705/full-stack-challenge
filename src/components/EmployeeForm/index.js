import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import axios from 'axios'
import InputField from '../Form/InputField'

class EmployeeForm extends Component {
  state = {
    id: '',
    email: '',
    password: '',
    action: 'new'
  }

  componentDidMount() {
    const { id } = this.props.match.params
    if (id) {
      this.fetchEmployee(id)
    }
  }

  fetchEmployee = async id => {
    const response = await axios.get(`/employees/${id}`)
    if (response.status === 200) {
      this.setState({
        id: response.data.user.id,
        email: response.data.user.email,
        password: '',
        action: 'update'
      })
    }
  }

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onSubmit = async e => {
    e.preventDefault()
    const userObj = {
      email: this.state.email,
      password: this.state.password
    }
    if (this.state.action === 'new') {
      const response = await axios.post('/employees', userObj)
      if (response.status === 200) {
        this.props.history.push('/')
      }
    } else {
      const response = await axios.patch(`/employees/${this.state.id}`, userObj)
      if (response.status === 200) {
        this.props.history.push('/')
      }
    }
  }

  render() {
    const { email, password, action } = this.state
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
            {action === 'new' ? 'Add Employee' : 'Update Employee'}
          </button>
        </p>
      </form>
    )
  }
}

export default withRouter(EmployeeForm)
