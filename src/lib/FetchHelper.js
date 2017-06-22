export default (method, endpoint, data) => {
  let headers = {}
  if (data) {
    headers = {
      'Content-Type': 'application/json'
    }
  }
  return fetch(`/${endpoint}`, {
    method: method.toUpperCase(),
    headers
  })
}
