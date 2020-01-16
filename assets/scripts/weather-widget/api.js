const requestWeather = ({ city, country }) => {
  return $.ajax({
    url: `api.openweathermap.org/data/2.5/weather?q=London`
  })
}
module.exports = {
  requestWeather
}
