import $api from "."

export const getTodos = async() => {
    const response = await $api.get('todos')
    return response.data
}

export const createTodo = async(title, icon, text) => {
    const response = await $api.post('todos', {title, icon, text})
    return response
}

export const removeTodo = async(id) => {
    const response = await $api.post(`todos/${id}`)
    return response
}