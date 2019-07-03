// 系统管理 路由

import Layout from '@/layout';

const loadView = (view) => {
    return () => import(`@/pages/${view}.vue`)
};

const routes = [
    {
        path: '/system',
        name: 'system',
        component: Layout,
        redirect: '/system/userManage',
        meta: {title: '系统管理', icon: 'el-icon-s-data'},
        children: [
            {
                path: 'departmentManage',
                name: 'system-departmentManage',
                component: loadView('system/departmentManage/index'),
                meta: {title: '部门管理'}
            },
            {
                path: 'userManage',
                name: 'system-userManage',
                component: loadView('system/userManage/index'),
                meta: {title: '用户管理'}
            },
            {
                path: 'roleManage',
                name: 'system-roleManage',
                component: loadView('system/roleManage/index'),
                meta: {title: '角色管理'}
            },
            {
                path: 'pageManage',
                name: 'system-pageManage',
                component: loadView('system/pageManage/index'),
                meta: {title: '页面管理'}
            }
        ]
    },
];

export default routes;