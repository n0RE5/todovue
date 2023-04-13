import Todo from '@/pages/Todo'
import Login from '@/pages/Login'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        component: Login
    },
    {
        path: '/todo',
        component: Todo
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router