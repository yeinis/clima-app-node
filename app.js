const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
  direccion: {
    alias: 'd',
    desc: 'Dirección de la ciudad para obtener el clima',
    demand: true
  }
}).argv


const getInfo = async (direccion)=> {
  try {
    const coordes = await lugar.getlugarLatitudLong( argv.direccion );
    const temp = await clima.getClima( coordes.lat, coordes.lng );
    return `el clima es de ${ coordes.direccion } es de ${ temp}`
  } catch (error) {
    console.log(error);
    return `No se puede determinar el clima de ${ direccion }`
  }
}

getInfo(argv.direccion)
.then( console.log)
.catch(console.log)