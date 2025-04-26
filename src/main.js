import { createApp } from 'vue'
import App from './App.vue'
import './assets/styles/index.css';
import focus from './directives/focus.js';
import color from './directives/color.js';
import copy from './directives/copy';
import translation from './plugins/translation';
import toggleTheme from './plugins/toggleTheme';
import router from './router';

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
.use(router)
.mount('#app')
