import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-512e6.firebaseio.com/'
});

export default instance;
