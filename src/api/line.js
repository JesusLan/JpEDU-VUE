// 绑定line
export const lineLoginUrl = (provider) => {
    return process.env.VUE_APP_API_URL + "/line-redirect-to-provider/" + provider
}

// 绑定 line 跳转
export const lineBindUrl = (route) => {
    return lineLoginUrl(route)
}