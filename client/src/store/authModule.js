import { checkAuth } from "@/http/userAPI"

const initUser = {
    id: 0,
    email: ''
}

export const authModule = {
    state: () => ({
        isAuth: false,
        isLoading: false,
        user: initUser,
        error: ''
    }),
    mutations: {
        fetchUser(state) {
            state.isLoading = true
        },
        fetchUserSuccess(state, payload) {
            state.isAuth = true
            state.isLoading = false
            state.error = ''
            state.user = payload
        },
        fetchUserError(state, payload) {
            state.isLoading = false
            state.error = payload
        },
        userLogout(state) {
            state.isAuth = false
            state.isLoading = false
            state.user = initUser
            state.error = ''
        }
    },
    actions: {
        logout({ commit }) {
            localStorage.removeItem('token')
            commit('userLogout')
        },
        async check({ commit }) {
            try {
                commit('fetchUser')
                const response = await checkAuth()
                commit('fetchUserSuccess', response)
            } catch (error) {
                console.log(error)
                commit('fetchUserError')
            }
        }
    }
}