<template>
    <div v-if="active" class="modal">
        <div @click="$event => $event.stopPropagation()" class="modal_w">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        active: {
            type: Boolean,
            required: true
        },
    }
}
</script>

<style scoped lang="scss">
.modal {
    position: absolute;
    display: flex;
    right: 0;
    left: 0;
    top: 0;
    bottom: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(134, 134, 134, 0.489);
    justify-content: center;
}

.modal_w {
    width: 100%;
    max-width: 800px;
    margin-top: 20px;
    display: flex;
    height: min-content;
    flex-direction: column;
    border-radius: 10px;
    padding: 20px 15px;
    background-color: white;
}

</style>