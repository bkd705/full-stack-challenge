import React from 'react'
import Employees from '../pages/Employees'

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
    component: TestComponent
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
    component: TestComponent
  },
  {
    exact: true,
    path: '/reviews/:id/update',
    component: TestComponent
  }
]

export default routes
