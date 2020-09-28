export default [
    {
        path: '/push-message',
        name: 'PushMessage',
        meta: { login: false },
        component: () => import('./push')
    }
]