const axios = require('axios');

const getWeather = async(lat, lon) => {
    const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=bf373a8de44501a36044e220aa4e857b&units=metric`)

    return res.data.main.temp;
}

module.exports = {
    getWeather
}