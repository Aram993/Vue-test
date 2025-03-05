<script>
import Counter from './components/Counter.vue';
import TodoList from './components/TodoList.vue';
import ToDo from './components/ToDo.vue';

export default {
  name: 'App',
  components: {Counter, TodoList, ToDo}
}
</script>

<template>
  <div>
    <ToDo/>
  </div>
</template>

<style scoped>

</style>
