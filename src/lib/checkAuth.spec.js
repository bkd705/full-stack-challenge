import { expect } from 'chai'
import jwt from 'jsonwebtoken'
import checkAuth from './checkAuth'

it('should return false given undefined', () => {
  expect(checkAuth(undefined)).to.be.false
})

it('should return true given a valid token', () => {
  expect(
    checkAuth(jwt.sign({ email: 'brennenkdenomme@gmail.com' }, 'supersecret'))
  ).to.be.true
})
