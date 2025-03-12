<script>
import Counter from './components/Counter.vue';
import TodoList from './components/TodoList.vue';
import ToDo from './components/ToDo.vue';
import Products from './components/Products.vue';

export default {
  name: 'App',
  components: {Counter, TodoList, ToDo, Products}
}
</script>

<template>
  <div>
    <Products/>
  </div>
</template>

<style scoped>

</style>
