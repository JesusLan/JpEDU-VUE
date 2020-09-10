import http from '../utils/http'

// 获取全部老师数据
export const allTeacher = () => {
    return http.get('/api/teacher')
}

// 获取老师数据
export const me = () => {
    return http.get('/api/teacher-me')
}

// 获取被学生关注的数据
export const students = () => {
    return http.get("/api/teacher-subscribe-students")
}

// 被关注
export const subscribe = (teacherId) => {
    return http.post(`/api/teacher-subscribe/${teacherId}`)
}

// 删除被关注
export  const unsubscribe = (teacherId) => {
    return http.delete(`/api/teacher-unsubscribe/${teacherId}`)
}

// 老师注册请求
export const teacherRegister = (data) => {
    return http.post("/api/teacher-register", data)
}

// 邮箱绑定
export const bindEmail = (email) => {
    return http.patch("/api/teacher-bind-email", {email})
}

// 绑定line
export const bindLine = (id) => {
    return http.patch("/api/teacher-bind-line", {oauth_id: id})
}