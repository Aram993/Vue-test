<script>
import Counter from './components/Counter.vue';
import TodoList from './components/TodoList.vue';
import ToDo from './components/ToDo.vue';
import Products from './components/Products.vue';
import References from './components/References.vue';

export default {
  name: 'App',
  components: {Counter, TodoList, ToDo, Products, References}
}
</script>

<template>
  <div>
    <References/>
  </div>
</template>

<style scoped>

</style>
