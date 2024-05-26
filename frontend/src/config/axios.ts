import axios, { AxiosResponse, InternalAxiosRequestConfig } from 'axios'

const client = axios.create({
  baseURL: `${import.meta.env.VITE_REACT_APP_API_URL}/api`,
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_REACT_APP_API_KEY}`,
  },
})

client.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    config.params = {
      ...config.params,
      populate: 'deep',
    }
    return config
  },
  (error) => Promise.reject(error)
)

client.interceptors.response.use(
  (response: AxiosResponse) => {
    response.data = response.data.data
    return response
  },
  (error) => Promise.reject(error)
)

export const fetcher = (url: string) => client.get(url).then((res) => res.data)
