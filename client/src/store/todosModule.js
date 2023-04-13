import { getTodos } from "@/http/todoAPI"

export const todosModule = {
    state: () => ({
        todos: [],
        todosFetching: false,
    }),
    mutations: {
        fetchTodosStart(state) {
            state.todosFetching = true
        },
        fetchTodosSuccess(state, payload) {
            state.todosFetching = false
            state.todos = payload
        },
        fetchTodosError(state, payload) {
            state.todosFetching = false
            state.error = payload
        }
    },
    actions: {
        async fetchTodos({ commit }) {
            try {
                commit('fetchTodosStart')
                const response = await getTodos()
                commit('fetchTodosSuccess', response)
            } catch (error) {
                commit('fetchTodosError')
            }
        }
    }
}