export default [
    {
        path: '/personal-center/student',
        name: 'StudentPersonalCenter',
        component: () => import('./student')
    },
    {
        path: '/personal-center/teacher',
        name: 'TeacherPersonalCenter',
        component: () => import('./teacher')
    }
]