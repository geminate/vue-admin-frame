// CURD 路由

import Layout from '@/layout';

const loadView = (view) => {
    return () => import(`@/pages/${view}.vue`)
};

const routes = [
    {
        path: '/curd',
        name: 'curd',
        component: Layout,
        redirect: '/curd/list',
        meta: {title: 'curd 标准页面', icon: 'el-icon-s-data'},
        children: [
            {
                path: 'edit',
                name: 'curd-edit',
                component: loadView('curd/edit/index'),
                meta: {title: '编辑页', activeMenu: '/curd', hidden: true}
            }, {
                path: 'list',
                name: 'curd-list',
                component: loadView('curd/list/index'),
                meta: {title: '列表页', activeMenu: '/curd', hidden: true}
            }, {
                path: 'show',
                name: 'curd-show',
                component: loadView('curd/show/index'),
                meta: {title: '查看页', activeMenu: '/curd', hidden: true}
            },
        ]
    },
];

export default routes;