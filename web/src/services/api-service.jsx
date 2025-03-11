import axios from 'axios';

const http = axios.create({
    baseURL: 'http://localhost:3000',
});

const login = (user) => http.post('/users', user);

export {
    login,
}