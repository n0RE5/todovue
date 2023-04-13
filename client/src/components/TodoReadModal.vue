<template>
    <Modal @click="$store.commit('switchTodoReadModal')" :active="$store.state.modal.todoReadModalActive">
        <div v-if="$store.state.modal.todoReadModal.title" class='todoRead_title'>{{ $store.state.modal.todoReadModal.title }}</div>
        <span class='todo_icon' :data-type='$store.state.modal.todoReadModal.icon' />
        <div class='todoRead_text'>{{ $store.state.modal.todoReadModal.text }}</div>
    </Modal>
</template>

<script>
import Modal from './UI/Modal.vue';
export default {
    components: {
        Modal
    }
}
</script>

<style scoped lang="scss">
@import '../styles/variables.scss';
@import '../styles/globals.scss';

.todoRead {
    margin-top: 20px;
    width: 60%;
    min-height: 90%;
}

.todoRead_title {
    margin-top: 5px;
    color: $dark;
    font-weight: 800;
    font-size: 24px;
    margin-bottom: 15px;
}

.todoRead_text {
    font-size: 18px;
    color: $dark;
    margin-top: 15px;
}

.todo_icon {
    @include todo_icon;
}

</style>