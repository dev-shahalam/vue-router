import {createRouter,createWebHistory} from 'vue-router'


import Home from '../view/homeView.vue'
import About from '../view/aboutView.vue'
import Contact from '../view/contactView.vue'

const routes = [
    {
        path:'/',
        name:'home',
        component:Home

    },
    {
        path:'/about',
        name:'about',
        component:About
    },
    {
        path:'/contact',
        name:'contact',
        component:Contact
    }
]

const router = createRouter({
    history:createWebHistory(),
    routes
})

export default router;

