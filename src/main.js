import { createApp } from 'vue'
import App from './App.vue'
//router 쓰일 component
import Home from './views/Home.vue'
import About from './views/About.vue'
import Users from './views/Users.vue'
import UserDetail from './views/UserDetail.vue'

import { createRouter, createWebHistory } from 'vue-router'


// router 정해줌., 길을 정함 
const routes = [
    { path : '/', component : Home, name: 'home'},
    { path : '/about', component : About, name: 'about'},
    { path : '/user', component : Users, name: 'users'},
    { path : '/user/:id', component : UserDetail, name: 'userdetail', props: true},
]
const router = createRouter({
    history : createWebHistory(),
    routes
})


const app = createApp(App)
app.use(router)
app.mount('#app')
