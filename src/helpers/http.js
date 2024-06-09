import Axios from 'axios'

const baseApiUrl = 'https://api.caiman-app.de/api/';

console.log(baseApiUrl);

const axios = Axios.create({
    baseURL: baseApiUrl
});

export default axios;