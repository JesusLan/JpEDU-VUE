export default [
    {
        path: '/',
        name: 'Home',
        meta: { login: false },
        component: () => import('./home')
    }
]