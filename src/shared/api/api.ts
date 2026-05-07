import axios from 'axios'

export const api = axios.create({
  baseURL: import.meta.env.API_URL + '/api',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    'X-Requested-With': 'XMLHttpRequest',
  },
  withCredentials: true,
  timeout: 10000,
})
