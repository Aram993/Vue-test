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
import Resume from './components/resume/Resume.vue';
import Hooks from './components/lifecycle-hooks/Hooks.vue';
import PostsMain from './components/posts/PostsMain.vue';
import SomeBlock from './components/mixins/SomeBlock.vue';
import FormMain from './components/mixins/FormMain.vue';
import TimerDisplay from './components/timer/TimerDisplay.vue';
import QuizQuestion from './components/timer/QuizQuestion.vue';
import BlockDirective from './components/directives/BlockDirective.vue';
import CopyTest from './components/directives/CopyTest.vue';
import Plugin from './components/Plugins/Plugin.vue';
import DarkLightTheme from './components/Plugins/Dark-lightTheme.vue';






export default {
  name: 'App',
  components: {Counter, Plugin, BlockDirective, TodoList, ToDo, Products, References, AccordionWrapper, NewsBlock, Main, MarketMain, People, Employees, Resume, Hooks, PostsMain, SomeBlock, FormMain, TimerDisplay, QuizQuestion, CopyTest, DarkLightTheme}
}
</script>

<template>
 <DarkLightTheme/>
</template>

<style scoped>

</style>
