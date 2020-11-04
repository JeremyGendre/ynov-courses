import { createRouter, createWebHistory } from 'vue-router';
import Foo from "../foo/Foo";

const routes = [
  {
    path: '/:text',
    name: 'List',
    component: Foo,
    props: true
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router
