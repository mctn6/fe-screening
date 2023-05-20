import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/pages/Login.vue';
import Dashboard from '@/pages/Dashboard.vue';
import AddOrder from '@/pages/Order/AddOrder.vue';

const routes = [
    {
        path: '/',
        name: 'Login',
        meta: { layout: 'AuthLayout' },
        component: Login,
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        meta: { layout: 'DefaultLayout', requiresAuth: true },
        component: Dashboard,
    },
    {
        path: '/add-order',
        name: 'AddOrder',
        meta: { layout: 'DefaultLayout', requiresAuth: true },
        component: AddOrder,
    },
    { path: '/:pathMatch(.*)', name: 'Login', component: Login },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})


router.beforeEach((to, from, next) => {
    const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);
    const session = sessionStorage.getItem('session');
  
    if (requiresAuth && !session) {
      next('/');
    } else {
      next();
    }
});

export default router