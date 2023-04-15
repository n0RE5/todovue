export const modalsModule = {
    state: () => ({
        todoModalActive: false,
        todoReadModalActive: false,
        burgerActive: false,
        todoReadModal: {
            title: '',
            icon: '',
            text: ''
        }
    }),
    mutations: {
        switchTodoModal(state) {
            state.todoModalActive = !state.todoModalActive
        },
        switchTodoReadModal(state) {
            state.todoReadModalActive = !state.todoReadModalActive
        },
        setReadModalData(state, data) {
            state.todoReadModal = data
        },
        switchBurgerState(state) {
            state.burgerActive = !state.burgerActive
        }
    },
}