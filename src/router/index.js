import { createRouter, createWebHistory } from 'vue-router';
import Layout from '@/layout/Layout';
import Login from '@/views/login/Login';

const routes = [
  {
    path: '/',
    name: 'Index',
    component: Layout,
    children: [
      {
        path: 'note',
        name: 'note',
        component: () => import(/* webpackChunkName: "note" */ '@/views/note/Note.vue')
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
