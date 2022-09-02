import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import './style/index.css'
import './style/style.css'
import { vfmPlugin } from 'vue-final-modal'
import 'flowbite';
import VueSweetalert2 from 'vue-sweetalert2'




createApp(App).use(store).use(router).use(vfmPlugin).use(VueSweetalert2).mount('#app')
