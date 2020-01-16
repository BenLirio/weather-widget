const requestWeather = ({ city, country }) => {
  return $.ajax({
    url: `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}`
  })
}
module.exports = {
  requestWeather
}
