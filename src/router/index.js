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
            path: '/404',
            component: loadView('404/index')
        },
        {
            path: '/',
            redirect: '/dashboard',
            component: Layout,
            isMenu: true,
            children: [
                {
                    path: 'dashboard',
                    name: 'Dashboard',
                    component: loadView('dashboard/index'),
                    meta: {title: '首页', icon: 'el-icon-s-home'}
                },
                {
                    path: 'curd',
                    name: 'Curd',
                    component: loadView('curd/index'),
                    redirect: '/curd/list',
                    meta: {title: 'curd 标准页面', icon: 'el-icon-s-data', breadcrumbClick: true},
                    children: [
                        {
                            path: 'edit',
                            name: 'Edit',
                            component: loadView('curd/edit/index'),
                            meta: {title: '编辑页', activeMenu: '/curd', hidden: true, breadcrumbClick: true}
                        }, {
                            path: 'list',
                            name: 'List',
                            component: loadView('curd/list/index'),
                            meta: {title: '列表页', activeMenu: '/curd', hidden: true, breadcrumbClick: true}
                        }, {
                            path: 'show',
                            name: 'Show',
                            component: loadView('curd/show/index'),
                            meta: {title: '查看页', activeMenu: '/curd', hidden: true, breadcrumbClick: true}
                        },
                    ]
                },
                {
                    path: 'nest',
                    name: 'Nest',
                    meta: {title: '多级导航', icon: 'el-icon-menu'},
                    component: loadView('nest/index'),
                    children: [
                        {
                            path: 'menu1',
                            name: 'Menu1',
                            component: loadView('nest/menu1/index'),
                            meta: {title: '菜单-1', icon: 'el-icon-s-grid', breadcrumbClick: true}
                        },
                        {
                            path: 'menu2',
                            name: 'Menu2',
                            meta: {title: '菜单-2', icon: 'el-icon-s-grid'},
                            component: loadView('nest/menu2/index'),
                            children: [
                                {
                                    path: 'menu2-1',
                                    name: 'Menu2-1',
                                    component: loadView('nest/menu2/menu2-1/index'),
                                    meta: {title: '菜单-2-1', icon: 'el-icon-s-grid', breadcrumbClick: true}
                                },
                                {
                                    path: 'menu2-2',
                                    name: 'Menu2-2',
                                    component: loadView('nest/menu2/menu2-2/index'),
                                    meta: {title: '菜单-2-2', icon: 'el-icon-s-grid', breadcrumbClick: true}
                                },
                            ]
                        },
                        {
                            path: 'menu3',
                            name: 'Menu3',
                            component: loadView('nest/menu3/index'),
                            meta: {title: '菜单-3', icon: 'el-icon-s-grid', breadcrumbClick: true}
                        }
                    ]
                }
            ]
        }
    ]
})
