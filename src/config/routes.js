import React from 'react'

const TestComponent = () => <p>Route success</p>

const routes = [
  {
    exact: true,
    path: '/employees',
    component: TestComponent
  },
  {
    exact: true,
    path: '/employees/create',
    component: TestComponent
  },
  {
    exact: true,
    path: '/employees/:id',
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
    path: '/reviews/:id',
    component: TestComponent
  },
  {
    exact: true,
    path: '/reviews/:id/update',
    component: TestComponent
  }
]

export default routes
