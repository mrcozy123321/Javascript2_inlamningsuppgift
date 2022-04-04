import axios from 'axios'

export default axios.create({
  baseURL: 'gttp://localhost:8080/api'
})