<script>
import Counter from './components/Counter.vue';
import TodoList from './components/TodoList.vue';
import ToDo from './components/ToDo.vue';
import Products from './components/Products.vue';
import References from './components/References.vue';
import AccordionWrapper from './components/AccordionWrapper.vue';
import NewsBlock from './components/NewsBlock.vue';
import MainParent from './components/provide-inject/MainParent.vue';
import Main from './components/toDoList/Main.vue';
import MarketMain from './components/market/MarketMain.vue';




export default {
  name: 'App',
  components: {Counter, TodoList, ToDo, Products, References, AccordionWrapper, NewsBlock, Main, MarketMain}
}
</script>

<template>
  <MarketMain/>
</template>

<style scoped>

</style>
