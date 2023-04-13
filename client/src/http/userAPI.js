import $api from "."
import jwt_decode from "jwt-decode"

export const login = async (email, password) => {
    const response = await $api.post('auth/login', {email, password})
    localStorage.setItem('token', response.data.token)
    return jwt_decode(response.data.token)
}

export const registration = async (email, password) => {
    const response = await $api.post('auth/registration', {email, password})
    localStorage.setItem('token', response.data.token)
    return jwt_decode(response.data.token)
}

export const checkAuth = async () => {
    const response = await $api.get('auth/check')
    localStorage.setItem('token', response.data)
    return jwt_decode(response.data)
}