import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import InputField from './InputField'

it('should render an text input by default', () => {
  const wrapper = shallow(<InputField />)
  expect(wrapper.find('input[type="text"]')).to.have.length(1)
})

it('should render a password field is passed type prop', () => {
  const wrapper = shallow(<InputField type="password" />)
  expect(wrapper.find('input[type="password"]')).to.have.length(1)
})
