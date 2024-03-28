import Gigantt from '@vue-gigantt/module'
import './../node_modules/@vue-gigantt/module/dist/style.css'
import { createApp } from 'vue'
import App from './App.vue'

createApp(App).use(Gigantt).mount('#app')
