

const axios = require( 'axios' );

const getClima = async ( lat, lng) => {
  const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&appid=628d0d1ac1ca497a3df7631fd6dc659a&units=metric`)
  
  return resp.data.main.temp;

}

module.exports = {
  getClima
}
