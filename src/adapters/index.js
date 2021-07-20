import axios from 'axios'

const adapter = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
  responseType: "json",
  withCredentials: false,
  headers: {
    'Content-Type': 'application/json;charset=utf-8',
  }
})

export default adapter