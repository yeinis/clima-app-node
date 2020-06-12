const axios = require( 'axios' );

const getlugarLatitudLong = async ( dir ) => {
  
  const encodeUrl = encodeURI( dir );
  
  
  const instance = axios.create( {
    baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${ encodeUrl }`,
    headers: { 'x-rapidapi-key': '5bf9ffe94bmsh278924e4314f7bbp16d2b8jsn837759bb3b4d' }
  } );
  
  
  const resp = await instance.get();

  if ( resp.data.Results.length === 0 ) {
    throw new Error(`No hay resultados para ${ dir }`)
  }

  const data = resp.data.Results[0];
  const direccion = data.name;
  const lat = data.lat;
  const lgn = data.lon;

    return {
      direccion,
      lat,
      lgn
    }

}

module.exports = {
  getlugarLatitudLong
}

