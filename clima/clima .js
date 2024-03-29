const axios = require('axios');

const getClima = async(lat, lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&appid=8a214c625ecf2d25ab0610230224d78f&units=metric`)

    return resp.data.main.temp;
}

module.exports = {
    getClima
}