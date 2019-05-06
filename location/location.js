const axios = require('axios');

const getLocation = async ( address ) => {
    const encodedURL = encodeURI( address );

    //console.log(encodedURL);
    
    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedURL}`,
        headers: {'X-RapidAPI-Key': '1f872fcf05mshb98a401e9392a52p1923d1jsnaae4c933fa76'}
    });
    
    const res = await instance.get();

    if(res.data.Results.length === 0) {
        throw new Error(`No hay resultados para ${address}`);
    }

    const data = res.data.Results[0];
    const { name, lat, lon } = data;

    return {
        name,
        lat,
        lon
    }
}

module.exports = {
    getLocation
}