<script>
import Counter from './components/Counter.vue';
import TodoList from './components/TodoList.vue';
import ToDo from './components/ToDo.vue';
import personCard from './components/personCard.vue';

export default {
  name: 'App',
  components: {Counter, TodoList, ToDo, personCard}
}
</script>

<template>
  <div>
    <personCard/>
  </div>
</template>

<style scoped>

</style>
