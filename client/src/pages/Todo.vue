<template>
    <div class="flex">
        <TodosModule/>
        <SidebarModule/>
    </div>
  </template>
  
<script>
import TodosModule from '@/modules/TodosModule.vue';
import SidebarModule from '@/modules/SidebarModule.vue';
export default {
  components: {
    TodosModule, SidebarModule
  }
}
</script>
  
  <style lang="scss">
  .flex {
    display: flex;
  }
  </style>
  