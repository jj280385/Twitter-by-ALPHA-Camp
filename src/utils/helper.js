import axios from 'axios'

const baseURL = 'https://dzbr-alphatwitter.herokuapp.com/api'

const axiosInstance = axios.create({
  baseURL
})

axiosInstance.interceptors.request.use(
  (config) => {
    // 從 localStorage 將 token 取出
    const token = localStorage.getItem('token')
    if (token) {
      // 如果 token 存在的話，則帶入Bearer token 到 headers 當中
      config.headers['Authorization'] = `Bearer ${token}`
    }
    return config
  },
  (err) => Promise.reject(err)
)

export const apiHelper = axiosInstance
