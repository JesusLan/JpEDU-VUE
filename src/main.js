// 引入 Vue 的默认值
import Vue from 'vue'
// 引入 App.vue 的默认值
import App from './App.vue'
// 引入 Router 的默认值
import router from './router'
// 引入 store/index.js 的默认值
import store from './store'
// 引入 Element 组件
import ElementUI from 'element-ui'
// 引入 Element 样式
import 'element-ui/lib/theme-chalk/index.css'


// 设置 false 以阻止 Vue 在启动时生成生产提示
Vue.config.productionTip = false
// 注册 Element
Vue.use(ElementUI)
// eslint 配置，允许 new 一个实例后不赋值，我们没有使用 eslint，如果有，则下一行注释不可缺少
/* eslint-disable no-new */
// 创建一个新的 Vue 实例
new Vue({
    // 配置 router 选项，指定为 router 对象，会自动将 router 对象注入到所有子组件中，在子组件中通过 this.$router 访问该 router 对象
    router,
    // 配置 store 选项，指定为 store 对象，会自动将 store 对象注入到所有子组件中，在子组件中通过 this.$store 访问该 store 对象
    store,
    render: h => h(App),
}).$mount('#app')
