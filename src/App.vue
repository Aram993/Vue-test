<script>
import Counter from './components/Counter.vue';
import TodoList from './components/TodoList.vue';
import ToDo from './components/ToDo.vue';
import books from './components/books.vue';
import TestFor from './components/TestFor.vue';

export default {
  name: 'App',
  components: {Counter, TodoList, ToDo, books, TestFor}
}
</script>

<template>
  <div>
    <TestFor/>
  </div>
</template>

<style scoped>

</style>
