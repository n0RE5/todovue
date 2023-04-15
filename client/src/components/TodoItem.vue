<template>
    <div @click="readTodo" class="todo">
        <span class='todo_icon' :data-type="icon"/>
        <div class='todo_preview'>{{ title }}</div>
        <div class="todo_date">{{ date }}</div>
        <a @click="$event => deleteTodo($event)" class="todo_delete"/>
    </div>
</template>

<script>
import { removeTodo } from '@/http/todoAPI'
import { parseRawDate } from '@/utils/formatDate'

export default {
    props: {
        title: {
            type: String,
            required: true
        },
        id: {
            type: Number,
            required: true
        },
        text: {
            type: String,
            required: true
        },
        createdAt: {
            type: String,
            required: true
        },
        icon: {
            type: String,
            required: true
        },
    },
    data() {
        return {
            date: ''
        }
    },  
    methods: {
        readTodo() {
            const data = {
                title: this.title,
                icon: this.icon,
                text: this.text
            }
            this.$store.commit('switchTodoReadModal')
            this.$store.commit('setReadModalData', data)
        },
        format() {
            this.date = parseRawDate(this.createdAt)
        },
        async deleteTodo(event) {
            try {
                event.stopPropagation()
                const response = await removeTodo(this.id)
                this.$store.dispatch('fetchTodos')
            } catch (error) {
                console.log(error);
            }
        }
    },
    mounted() {
        this.format()
    }
}
</script>

<style lang="scss" scoped>
@import '../styles/globals.scss';
@import '../styles/variables.scss';
.todo {
    transition: .2s ease-in;
    background-color: #f5f7f9;
    border-radius: 20px;
    height: 85px;
    padding: 0 35px;
    align-items: center;
    display: flex;
    width: 100%;
    &:hover {
        cursor: pointer;
        background-color: white;
    }
}

.todo_preview {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    flex: 1;
    color: #2e3554;
    font-size: 18px;
}

.todo_date {
    font-weight: 800;
    font-size: 20px;
    color: #2e3554;
}

.todo_delete {
    transition: all .25s ease-in-out;
    margin-left: auto;
    padding: 5px;
    border-radius: 5px;
    &::before {
        display: flex;
        content: "";
        width: 20px;
        height: 20px;
        background: url('../assets/delete.svg') no-repeat center;
        background-size: contain;
    }
    &:hover {
        background-color: black;
        &::before {
            filter: invert(100%);
        }
    }
}

.todo_icon {
    @include todo_icon;
}

@media (min-width: $small) and (max-width: $small-s) {

    .todo_date {
        display: none;
    }
}

@media (min-width: $medium) and (max-width: $medium-s) {

.todo_date {
    display: none;
}
}

</style>