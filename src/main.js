import { createApp } from 'vue'
import {createRouter, createWebHistory} from 'vue-router'
import Axios from 'axios'

import App from './App.vue'
import HomePage from './pages/HomePage.vue'
import DataPage from './pages/DataPage.vue'
import MemoPage from './pages/MemoPage.vue'
import Teachhome from './pages/TeachHome.vue'

const routes = [
  { name: 'home', path: '/', component: HomePage },
  { name: 'data', path: '/userData/:userId?', component: DataPage },
  { name: 'memo', path: '/userMemo/:userId?/:titleId?', component: MemoPage },
  { name: 'teach_home', path: '/teach_home', component: Teachhome },
]

const router = createRouter({
  history: createWebHistory(),
  routes, 
})


const app = createApp(App)

app.use(router)

app.mount('#app')

app.config.globalProperties.$axios = Axios;
app.config.globalProperties.$list = null;
app.config.globalProperties.$usersData = null;