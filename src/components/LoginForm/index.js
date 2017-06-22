import React, { Component } from 'react'
import axios from 'axios'

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
    const response = await axios.post('/users/validate', this.state)
    if (response.data.token) {
      localStorage.setItem('paytm_user_token', response.data.token)
    } else {
      console.log('Error: ', response.data.error)
    }
  }

  render() {
    return <form onSubmit={this.onSubmit} />
  }
}

export default LoginForm
