import axios from "axios"

const tournierMaximeAPI = axios.create({
  baseURL: process.env.API_URI,
})

export { tournierMaximeAPI }
