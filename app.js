const location = require('./location/location.js');
const weather = require('./weather/weather');

const argv = require('yargs').options({
    address: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

const getInfo = async( address ) => {
    try {
        const coords = await location.getLocation(address);
        const weatherData = await weather.getWeather(coords.lat, coords.lon);
        return `El clima de ${coords.name} es de ${weatherData}`;
    } catch(e) {
        return 'No se encontró la dirección especificada';
    }
}

getInfo(argv.address)
    .then(console.log);