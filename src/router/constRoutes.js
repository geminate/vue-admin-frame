// 不需要权限判断的路由表

import Layout from '@/layout';

const loadView = (view) => {
    return () => import(`@/pages/${view}.vue`)
};

const routes = [
    // 登录页
    {
        path: '/login',
        name: 'login',
        component: loadView('login/index'),
        meta: {title: '登陆', hidden: true},
    },

    // 首页
    {
        path: '/',
        redirect: '/dashboard',
        component: Layout,
        meta: {title: '首页', icon: 'el-icon-s-home'},
        children: [{
            path: 'dashboard',
            name: 'dashboard',
            component: loadView('dashboard/index'),
            meta: {title: '首页', activeMenu: '/', hidden: true}
        }]
    }
];

export default routes;