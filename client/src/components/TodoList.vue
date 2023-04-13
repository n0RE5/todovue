<template>
    <div class="todoitem" v-for="todo in todos">
        <TodoItem 
            :title="todo.title" 
            :id="todo.id" 
            :text="todo.text" 
            :createdAt="todo.createdAt" 
            :icon="todo.icon"
        />
    </div>
</template>

<script>
import TodoItem from './TodoItem.vue';
export default {
    components: {
        TodoItem
    },
    props: {
        todos: {
            type: Array,
            required: true
        }
    }
}
</script>

<style scoped lang="scss">
.todoitem {
    margin-top: 16px;
}
</style>