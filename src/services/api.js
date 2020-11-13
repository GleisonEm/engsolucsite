import axios from 'axios';

const api = axios.create({
    baseURL: 'https://engsoluc.jorgeemanoel.com/api/v1'
});
console.log(api);
export default api;