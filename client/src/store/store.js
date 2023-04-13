import { createStore } from 'vuex'
import { modalsModule } from './modalsModule'
import { authModule } from './authModule'
import { todosModule } from './todosModule'

export default createStore({
    modules: {
        modal: modalsModule,
        auth: authModule,
        todo: todosModule
    }
})