import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import { routesNames, routesPath } from './routes'

const Cocktails = () =>
    import ( /* webpackChunkName: "cocktails" */ '../views/Cocktails.vue');
const Cocktail = () =>
    import ( /* webpackChunkName: "cocktails" */ '../views/Cocktail.vue');

Vue.use(VueRouter)

const routes = [{
        path: routesPath.home,
        name: routesNames.home,
        component: Home
    },
    {
        path: routesPath.cocktails,
        name: routesNames.cocktails,
        component: Cocktails,
        children: [{
            path: routesPath.cocktail,
            name: routesNames.cocktail,
            component: Cocktail,
        }]
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router