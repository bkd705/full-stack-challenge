import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import axios from 'axios'
import InputField from '../Form/InputField'

class LoginForm extends Component {
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
    const response = await axios.post('/employees/validate', this.state)
    if (response.data.token) {
      localStorage.setItem('paytm_user_token', response.data.token)
      this.props.history.push('/')
    } else {
      console.log('Error: ', response.data.error)
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
            Login
          </button>
        </p>
      </form>
    )
  }
}

export default withRouter(LoginForm)
