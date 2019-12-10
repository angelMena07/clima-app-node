const axios = require('axios');

const getLugarLatLng = async(dir) => {

    const encondedUrl = encodeURI(dir);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${ encondedUrl }`,
        headers: { 'x-rapidapi-key': '00c95ac2e4msh64edc9d952e7b93p14585bjsn45369de528ee' }
    });

    const resp = await instance.get();

    if (resp.data.Results.length === 0) {
        throw new Error(`no hay resultados para ${dir}`);
    }

    const data = resp.data.Results[0];
    const direccion = data.name;
    const lat = data.lat;
    const lng = data.lon;

    return {
        direccion,
        lat,
        lng
    }

}

module.exports = {
    getLugarLatLng
}