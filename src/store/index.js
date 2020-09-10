import Vue from 'vue'
import Vuex from 'vuex'
import auth from './modules/auth'
import plugin from './plugin'

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        auth,
    },
    plugins: [plugin]
})

export default store
