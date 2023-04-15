<template>
    <div class="flex">
        <TodosModule/>
        <SidebarModule/>
        <Burger/>
    </div>
  </template>
  
<script>
import TodosModule from '@/modules/TodosModule.vue';
import SidebarModule from '@/modules/SidebarModule.vue';
import Burger from '@/components/Burger.vue';
export default {
  components: {
    TodosModule, SidebarModule, Burger
  }
}
</script>
  
  <style lang="scss">
  .flex {
    display: flex;
  }
  </style>
  