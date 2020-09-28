import http from '../utils/http'


// 获取全部学生数据
export const sendChat = (data) => {
    return http.get('/api/push/?message='+data.message)
}
