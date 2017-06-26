import React from 'react'
import Employees from '../pages/Employees'
import CreateReview from '../pages/CreateReview'
import CreateEmployee from '../pages/CreateEmployee'

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
    component: CreateEmployee
  },
  {
    exact: true,
    path: '/employees/:id/update',
    component: TestComponent
  },
  {
    exact: true,
    path: '/reviews',
    component: TestComponent
  },
  {
    exact: true,
    path: '/reviews/create',
    component: CreateReview
  },
  {
    exact: true,
    path: '/reviews/:id/update',
    component: TestComponent
  }
]

export default routes
