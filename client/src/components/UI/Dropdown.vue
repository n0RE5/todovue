<template>
    <div @click="$emit('update:visible', false)" v-if="visible" class="dropdown">
        <slot></slot>
    </div>
</template>

<script>
export default {
    props: {
        visible: {
            type: Boolean,
            default: false
        }
    }
}
</script>

<style lang="scss">
@import '../../styles/variables.scss';
.dropdown {
    margin-top: 4px;
    position: absolute;
    display: flex;
    border-radius: 10px;
    background-color: white;
    border: 2px solid $dark;
    a {
        cursor: pointer;
        padding: 15px 20px;
        text-decoration: none;
        color: $dark;
        font-size: 18px;
        &:hover {
            text-decoration: underline;
        }
    }
}
</style>