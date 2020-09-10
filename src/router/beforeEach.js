import localforage from 'localforage'
import store from  '@/store'

const beforeEach = (to, from, next) => {
    if (to.meta.login === true) {
        // 判断缓存 token 是否有效和存在
        localforage.getItem('token').then( token => {
            if (!token || !token.hasOwnProperty('access_token') || ((new Date().getTime() - token.created_at) / 1000) >= token.expires_in) {
                next({name: "Login"})
            } else {
                if (!store.getters.token) {
                    store.commit('SET_TOKEN', {token})
                }
                next()
            }
        })
    } else {
        next()
    }
}

export default beforeEach