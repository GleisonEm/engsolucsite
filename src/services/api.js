import axios from 'axios';

const api = axios.create({
    baseURL: 'http://67.207.92.246/api/v1'
});
console.log(api);
export default api;