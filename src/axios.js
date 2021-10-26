import axios from 'axios'
const instance = axios.create({
    baseURL: 'https://tinder-backend-siva.herokuapp.com'
})

export default instance;