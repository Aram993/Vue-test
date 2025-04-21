import { createApp } from 'vue'
import App from './App.vue'
import './assets/styles/index.css';
import focus from './directives/focus.js';
import color from './directives/color.js';
import copy from './directives/copy';

createApp(App)
.directive('focus', focus)
.directive('color', color)
.directive('copy', copy)
.mount('#app')
