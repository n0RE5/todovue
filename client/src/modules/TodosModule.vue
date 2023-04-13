<template>
    <div class="media">
        <div class="media_top">
            <div class="media_top__title">Your todos:</div>
            <a class="media_top__button" @click="$store.commit('switchTodoModal')" >
                <span class="btn_summ"/>
                add
            </a>
        </div>
        <div class="media_recenttodos">Recent todos</div>
        <hr class="hr" />
        <TodoList :todos="$store.state.todo.todos"/>
        <TodoModal />
        <TodoReadModal/>
    </div>
</template>

<script>
import TodoList from '@/components/TodoList.vue';
import TodoModal from '@/components/TodoModal.vue';
import TodoReadModal from '@/components/TodoReadModal.vue';
import { getTodos } from '@/http/todoAPI';
export default {
    components: {
        TodoReadModal,
        TodoList,
        TodoModal
    },
    data() {
        return {
            todos: [],
        }
    },
    methods: {
        async fetchTodos() {
            const todoList = await getTodos()
            this.todos = todoList
        }
    },
    mounted() {
        this.$store.dispatch('fetchTodos')
        !this.$store.state.auth.isAuth && this.$router.push('/')
    }
}
</script>

<style lang="scss" scoped>
@import '../styles/variables.scss';
.media {
    padding: 0 150px;
    flex: auto;
}

.media_recenttodos {
    color: $dark;
    font-size: 22px;
    margin-top: 40px;
    margin-left: 36px;
}

.hr {
    margin: 25px 0;
    border-top: $border;
}

.media_top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    &__title {
        color: $dark;
        font-weight: 500;
        font-size: 32px;
    }
    &__button {
        font-weight: 500;
        display: flex;
        transition: all .25s ease-in;
        padding: 10px 16px;
        border: 2px solid $dark;
        border-radius: 8px;
        font-size: 18px;
        .btn_summ {
            margin-right: 5px;
            display: flex;
            justify-content: center;
            align-items: center;
            width: 20px;
            border: 2px solid $dark;
            border-radius: 50%;
            height: 20px;
            content: "";
            &::before {
                position: absolute;
                content: "";
                width: 8px;
                height: 2px;
                background-color: $dark;
            }
            &::after {
                position: absolute;
                content: "";
                width: 2px;
                height: 8px;
                background-color: $dark;
            }
        }
        &:hover {
            background-color: $dark;
            color: white;
            cursor: pointer;
            .btn_summ {
                border: 2px solid white;
                &::before, &::after {
                    background-color: white;
                }
            }
        }
    }
}
</style>