import axios from "axios"

const api = axios.create({
    baseURL: 'https://winx.get.sc/api/'
})

export default api