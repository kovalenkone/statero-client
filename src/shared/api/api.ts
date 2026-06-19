import axios from 'axios'
import { toast } from 'sonner'

let accessToken: string | null = null

export const getAccessToken = () => accessToken
export const setAccessToken = (token: string | null) => {
  accessToken = token
}

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL + '/api',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    'X-Requested-With': 'XMLHttpRequest',
  },
  withCredentials: true,
  timeout: 10000,
})

api.interceptors.request.use(config => {
  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`
  }

  return config
})

api.interceptors.response.use(
  response => response.data,
  error => {
    if (!error.response) {
      toast.error('Ошибка сети, повторите попытку позже')
    }

    if (error.response.status >= 500) {
      toast.error('Ошибка сервера, повторите попытку позже')
    }

    return Promise.reject(error)
  },
)
