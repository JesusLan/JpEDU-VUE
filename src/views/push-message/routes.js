export default [
    {
        path: '/',
        name: 'PushMessage',
        meta: { login: false },
        component: () => import('./push')
    }
]