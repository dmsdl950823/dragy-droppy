import './assets/reset.css'
import './assets/main.css'
import './assets/variables.scss'
import 'ant-design-vue/dist/reset.css';
import 'vue3-perfect-scrollbar/style.css';

import Antd from 'ant-design-vue'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'


const app = createApp(App)

app.use(router)
app.use(Antd)

app.mount('#app')
