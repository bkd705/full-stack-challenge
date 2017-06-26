import React from 'react'
import { Link } from 'react-router-dom'
import checkAuth from '../../lib/checkAuth'

const AuthLinks = () =>
  <div className="nav-right nav-menu is-active">
    <Link to="/" className="nav-item">Dashboard</Link>
    <Link to="/employees" className="nav-item">Employees</Link>
  </div>

const UnAuthLinks = () =>
  <div className="nav-right nav-menu is-active">
    <Link to="/" className="nav-item">Login</Link>
  </div>

const Navigation = () => {
  const isAuth = checkAuth(localStorage.getItem('paytm_user_token'))
  const links = isAuth ? <AuthLinks /> : <UnAuthLinks />

  return (
    <nav className="nav">
      <div className="container">
        <div className="nav-left">
          <Link to="/" className="nav-item">
            Paytm
          </Link>
        </div>

        {links}
      </div>
    </nav>
  )
}

export default Navigation
