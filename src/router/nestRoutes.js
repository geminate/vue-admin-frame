// 不需要权限判断的路由表

import Layout from '@/layout';

const loadView = (view) => {
    return () => import(`@/pages/${view}.vue`)
};

const routes = [
    {
        path: '/nest',
        name: 'nest',
        component: Layout,
        meta: {title: '多级导航', icon: 'el-icon-menu'},
        children: [
            {
                path: 'menu1',
                name: 'nest-menu1',
                component: loadView('nest/menu1/index'),
                meta: {title: '菜单-1', icon: 'el-icon-s-grid'}
            },
            {
                path: 'menu2',
                name: 'nest-menu2',
                meta: {title: '菜单-2', icon: 'el-icon-s-grid'},
                component: loadView('nest/menu2/index'),
                children: [
                    {
                        path: 'menu2-1',
                        name: 'nest-menu2-menu2-1',
                        component: loadView('nest/menu2/menu2-1/index'),
                        meta: {title: '菜单-2-1', icon: 'el-icon-s-grid'}
                    },
                    {
                        path: 'menu2-2',
                        name: 'nest-menu2-menu2-2',
                        component: loadView('nest/menu2/menu2-2/index'),
                        meta: {title: '菜单-2-2', icon: 'el-icon-s-grid'}
                    },
                ]
            },
            {
                path: 'menu3',
                name: 'nest-menu3',
                component: loadView('nest/menu3/index'),
                meta: {title: '菜单-3', icon: 'el-icon-s-grid'}
            }
        ]
    }
];

export default routes;