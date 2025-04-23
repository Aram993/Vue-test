import { createApp } from 'vue'
import App from './App.vue'
import './assets/styles/index.css';
import focus from './directives/focus.js';
import color from './directives/color.js';
import copy from './directives/copy';
import translation from './plugins/translation';
import toggleTheme from './plugins/toggleTheme';

const ru = {
    app: {
        title: 'Работа с плагинами',
        btn: 'KNOPKA'
    }
}

const en = {
    app: {
        title: 'Working with plugins',
        btn: 'BUTTON'
    }
}

createApp(App)
.directive('focus', focus)
.directive('color', color)
.directive('copy', copy)
.use(translation, {ru, en})
.use(toggleTheme)
.mount('#app')
