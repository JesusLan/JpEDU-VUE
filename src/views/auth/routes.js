export default [
    // 登陆路由
    {
        path: '/auth/login',
        name: 'Login',
        component: () => import('./login')
    },
    //注册路由
    {
        path: '/auth/register',
        name: 'Register',
        component: () => import('./register')
    }
]