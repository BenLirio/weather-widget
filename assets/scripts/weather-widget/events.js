const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api')
const getWeatherSubmit = e => {
  e.preventDefault()
  const data = getFormFields(e.target)
  api.requestWeather(data).then(console.log)
}
const createHandlers = () => {
  $('#get-weather-form').on('submit', getWeatherSubmit)
}
module.exports = {
  createHandlers
}
