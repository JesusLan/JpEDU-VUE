import Vue from 'vue'
import Router from 'vue-router'
import beforeEach from './beforeEach'
//引入鉴权路由
import auth from '../views/auth/routes'
import home from '../views/home/routes'
import personalCenter from '../views/personal-center/routes'
import pushMessage from '../views/push-message/routes'

Vue.use(Router)
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}
const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        ...auth, ...home, ...personalCenter,...pushMessage,
    ]
})

//钩子函数
router.beforeEach(beforeEach)

export default router
