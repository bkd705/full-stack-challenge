import React from 'react'
import checkAuth from './checkAuth'
import Login from '../pages/Login'
import Dashboard from '../pages/Dashboard'

export default () => {
  if (checkAuth(localStorage.getItem('paytm_user_token'))) {
    return <Dashboard />
  } else {
    return <Login />
  }
}
