<template>
    <Modal @click="disableModal" :active="$store.state.modal.todoModalActive">
        <input class="todo_title" :value="title" @input="title = $event.target.value" type="text" placeholder='Title' />
        <div class='todo_icons'>
            <a 
                v-for="ico in icons"
                @click=" icon = ico" 
                :data-selected="icon === ico ? true : false" 
                :data-type="ico"
                class='todo_icon todo_select' 
            />
        </div>
        <textarea :value="text" @input="text = $event.target.value" class='todo_text' placeholder='Start typing' rows="15" />
        <a class='todo_add' @click="addTodo">Add</a>
    </Modal>
</template>

<script>
import { createTodo } from '@/http/todoAPI';
import Modal from './UI/Modal.vue';
export default {
    components: {
        Modal
    },
    data() {
        return {
            icons: ['T', 'L', 'I'],
            title: '',
            icon: 'T',
            text: '',
        }
    },
    methods: {
        disableModal() {
            this.$store.commit('switchTodoModal')
        },  
        async addTodo() {
            try {
                if (!this.title || !this.text) {
                    alert('Please add title or text!')
                    return
                }
                const response = await createTodo(this.title, this.icon, this.text)
                this.$store.dispatch('fetchTodos')
                this.disableModal()
            } catch (error) {
                console.log(error);
            }
        }
    }
}
</script>

<style scoped lang="scss">
@import '../styles/variables.scss';
@import '../styles/globals.scss';
.todo_icon {
    @include todo_icon;
}
.todo {
    margin-top: 60px!important;
    width: 60%;
}

.todo_icons {
    display: flex;
    margin: 15px 0;
}

.todo_select {
    transition: all .1s ease-in;
    &[data-selected="true"] {
        outline: 5px solid rgba(255, 6, 6, 0.305);
    }
    &:hover {
        cursor: pointer;
    }
}

.todo_title {
    height: auto;
    border: none;
    height: 40px;
    appearance: none;
    font-size: 20px;
    color: $dark;
    outline: none;
    &::placeholder {
        display: flex;
        align-items: center;
        color: #d2d4d6;
        font-size: 24px;
    }
}

.todo_add {
    transition: all .25s ease-in;
    margin-left: auto;
    font-weight: 500;
    font-size: 20px;
    border: 2px solid $dark;
    border-radius: 8px;
    padding: 10px 20px;
    color: $dark;
    &:hover {
        color: white;
        background-color: $dark;
    }
}

.todo_text {
    border: none;
    resize: none;
    appearance: none;
    outline: none;
    color: $dark;
    font-size: 18px;
    &::placeholder {
        color: #d2d4d6;
        font-size: 18px;
        font-weight: 400;
    }
}
</style>