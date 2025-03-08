<script>
import Counter from './components/Counter.vue';
import TodoList from './components/TodoList.vue';
import ToDo from './components/ToDo.vue';
import books from './components/books.vue';

export default {
  name: 'App',
  components: {Counter, TodoList, ToDo, books}
}
</script>

<template>
  <div>
    <books/>
  </div>
</template>

<style scoped>

</style>
