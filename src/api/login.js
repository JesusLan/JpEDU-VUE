import http from '@/utils/http'

export const login = ({ username, password, provider }) => {
    return http.post('/oauth/token', {
        username,
        password,
        provider,
        grant_type: 'password',
        scope: '*',
        client_id: process.env.VUE_APP_AUTH_CLIENT_ID,
        client_secret: process.env.VUE_APP_AUTH_CLIENT_SECRET
    })
}