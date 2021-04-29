import axios from 'axios'
import store from '@/store'
import {getToken} from "@/utils/auth"


const service = axios.create({
  baseURL: process.env.VUE_APP_API, // url = base url + request url
  timeout: 10000 // request timeout
})

// request interceptor
service.interceptors.request.use(
  config => {
    // do something before request is sent
    if (store.getters.token) {
      // please modify it according to the actual situation
      config.headers['Authorization'] = 'bearer ' + getToken()
    }
    return config
  },
  error => {
    // do something with request error
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  response => {
    const res = response.data

    if (response.status !== 200 && response.status !== 201) {
      // Insert code here to show error message
      return Promise.reject(new Error(res.message || 'Error'))
    } else {
      return res
    }
  },
  error => {
    console.log('err' + error) // for debug
    // Insert code here to show error message
    return Promise.reject(error)
  }
)

export default service
