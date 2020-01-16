const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api')
const getWeatherSubmit = e => {
  e.preventDefault()
  const data = getFormFields(e.target)
  api
    .requestWeather(data)
    .then(res => {
      const humidity = res.main.humidity
      const temp = res.main.temp
      const conditions = res.main.description
      $('.temp').text(temp)
      $('.humidity').text(humidity + '%')
      $('.conditions').text(conditions)
    })
    .catch('key not workin work')
}
const createHandlers = () => {
  $('#get-weather-form').on('submit', getWeatherSubmit)
}
module.exports = {
  createHandlers
}
