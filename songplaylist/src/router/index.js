import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "../components/home/Home";
import Playlist from "../components/playlist/Playlist";

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/playlist',
        name: 'playlist',
        component: Playlist
    },
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

export default router