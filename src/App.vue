<script>
import Counter from './components/Counter.vue';
import TodoList from './components/TodoList.vue';
import ToDo from './components/ToDo.vue';
import Products from './components/Products.vue';
import References from './components/References.vue';
import AccordionWrapper from './components/AccordionWrapper.vue';
import NewsBlock from './components/NewsBlock.vue';

export default {
  name: 'App',
  components: {Counter, TodoList, ToDo, Products, References, AccordionWrapper, NewsBlock}
}
</script>

<template>
  <NewsBlock/>
</template>

<style scoped>

</style>
