import { login } from '../../api/login'
import { removeToken, setToken } from '../../utils/auth'

const state = {
    token: {},
}

const getters = {
    //token
    token: state => state.token,
    //授权token
    accessToken : state => state.token.access_token,
    //授权的类型
    provider: state => state.token.provider,
    //判断是否登录
    isLogin: state => state.token.created_at + state.token.expires_in * 1000 > new Date().getTime(),
}

const mutations = {
    SET_TOKEN (state, {token}) {
        state.token = token
    }
}

const actions = {
    //登录
    loginHandle ({ commit }, { username, password, provider }) {
        return new Promise((resolve, reject) => {
            return login({username, password, provider})
                .then(response => {
                    const token = {
                        ...response.data,
                        created_at: new Date().getTime(),
                        provider
                    }

                    commit('SET_TOKEN', {token})

                    resolve(setToken(token))
                })
                .catch(error => {
                    reject(error)
                })
        })
    },

    logoutHandle ({ commit }) {
        return new Promise(() => {
            removeToken()
            commit("SET_TOKEN", { token: {} })
        })
    }
}

export default {
    state, // state 类似与组件中的 data 数据
    getters, // getter 存放公共函数供组件调用，类似于组件中的过滤函数 computed 或者 filters
    mutations, // mutations 类似于组件里面的 methods 在 mutations 里面可以对 state 的数据进行修改
    actions // actions 类似于mutations 大体归类到事件，mutation像事件注册，需要相应的条件触发，action像是管理触发条件。
}