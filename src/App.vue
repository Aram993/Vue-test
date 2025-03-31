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
import People from './components/People.vue';
import Employees from './components/employees/Employees.vue';





export default {
  name: 'App',
  components: {Counter, TodoList, ToDo, Products, References, AccordionWrapper, NewsBlock, Main, MarketMain, People, Employees}
}
</script>

<template>
  <Employees/>
</template>

<style scoped>

</style>
