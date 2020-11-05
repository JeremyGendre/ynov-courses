import Vue from 'vue'
import VueRouter from 'vue-router'
import AppContent from "../components/AppContent";

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'Home',
        component: AppContent
    },
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

export default router