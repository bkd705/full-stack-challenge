import React, { Component } from 'react'

class FeedbackForm extends Component {
  state = {
    creator: '',
    title: '',
    text: ''
  }

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onSubmit = e => {}
}
