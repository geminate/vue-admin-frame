import Vue from 'vue';
import Router from 'vue-router';
import Layout from '@/layout';

Vue.use(Router);

// 懒加载路由
const loadView = (view) => {
    return () => import(`@/pages/${view}.vue`)
};

export default new Router({
    routes: [
        {
            path: '/login',
            component: loadView('login/index')
        },
        {
            path: '/',
            redirect: '/dashboard',
            component: Layout,
            children: [{
                path: 'dashboard',
                name: 'Dashboard',
                component: loadView('dashboard/index')
            }]
        }
    ]
})
