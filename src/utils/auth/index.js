import localforage from 'localforage'

const TOKEN = 'token';

// 当值被存储后
export const setToken = (token) => {
    return localforage.setItem(TOKEN, token)
}

// 当离线仓库中的值被载入时
export const getToken = () => {
    return localforage.getItem(TOKEN)
}

// 当值被移除后
export const removeToken = () => {
    return localforage.removeItem(TOKEN)
}