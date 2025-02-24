import axios from "axios"

axios.create({ baseURL: import.meta.env.VITE_URL })

export default axios