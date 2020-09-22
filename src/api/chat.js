import http from '../utils/http'

export function sendChat(data) {
    // 获取全部学生数据
    export const allStudent = (data) => {
        return http.get('/api/push').data
    }
}