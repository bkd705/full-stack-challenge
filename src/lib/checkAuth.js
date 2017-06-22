import decode from 'jwt-decode'

/**
 * Method that retrieves token from local storage and validates it.
 * @return - true for valid, false for invalid
 */
export default token => {
  if (!token) {
    return false
  }

  if (decode(token) && decode(token).email) {
    return true
  }
}
