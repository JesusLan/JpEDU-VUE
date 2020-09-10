import axios  from 'axios'
import { Message } from 'element-ui'
import router from '../../router'

const httpRequest = axios.create({
    timeout: 10000,
    baseURL: process.env.VUE_APP_API_URL
})

httpRequest.interceptors.request.use(
    config => {
        return config
    },
    error => {
        return Promise.reject(error)
    }
)

export function setHttpToken(token) {
    httpRequest.defaults.headers.common.Authorization = `Bearer ${token}`
}

httpRequest.interceptors.response.use(
    response => {
        return response
    },
    error => {
        let message = error.response.data.message ? error.response.data.message : error.response.statusText
        let dangerouslyUseHTMLString = false

        if (error.response.status === 422 && error.response.data.hasOwnProperty.call(error, "error")) {
            message += '<br>';
            for (let key in error.response.data.errors) {
                let items = error.response.data.errors[key]
                if (typeof items === 'string') {
                    message += `${items} <br>`
                } else {
                    error.response.data.errors[key].forEach( item => {
                        message += `${item} <br>`
                    })
                }
            }
            dangerouslyUseHTMLString = true
        }

        if (error.response.status === 401 && error.response.data.message === 'Unauthenticated.') {
            router.push({name: 'Login'})
        }

        Message({
            dangerouslyUseHTMLString,
            message: message,
            type: 'error'
        })

        return Promise.reject(error)
    }
)

export default httpRequest
