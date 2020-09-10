import http from '../utils/http'

// 获取全部学生数据
export const allStudent = () => {
    return http.get('/api/student')
}

// 获取学生数据
export const me = () => {
    return http.get('/api/student-me')
}

// 获取学生关注老师的数据
export const teachers = () => {
    return http.get("/api/subscribe-teachers")
}

// 学生注册请求
export const studentRegister = (data) => {
    return http.post("/api/student-register", data)
}

// 邮箱绑定
export const bindEmail = (email) => {
    return http.patch("/api/student-bind-email", {email})
}

//绑定line
export const bindLine = (id) => {
    return http.patch("/api/student-bind-line", {oauth_id: id})
}