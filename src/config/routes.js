import React from 'react'
import Employees from '../pages/Employees'
import ReviewForm from '../pages/ReviewForm'
import EmployeeForm from '../pages/EmployeeForm'

const TestComponent = () => <p>Test</p>

const routes = [
  {
    exact: true,
    path: '/employees',
    component: Employees
  },
  {
    exact: true,
    path: '/employees/create',
    component: EmployeeForm
  },
  {
    exact: true,
    path: '/employees/:id/update',
    component: EmployeeForm
  },
  {
    exact: true,
    path: '/reviews/create',
    component: ReviewForm
  },
  {
    exact: true,
    path: '/reviews/:id/update',
    component: ReviewForm
  }
]

export default routes
