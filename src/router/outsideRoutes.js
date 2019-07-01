// 不需要权限判断的路由表

import Layout from '@/layout';

const loadView = (view) => {
    return () => import(`@/pages/${view}.vue`)
};

const routes = [
    {
        path: '/outside',
        name: 'outside',
        meta: {title: '内嵌外部页面', icon: 'el-icon-menu'},
        component: Layout,
        children: [
            {
                path: 'baidu',
                name: 'outside-baidu',
                component: loadView('outside/index'),
                meta: {
                    title: '百度',
                    icon: 'el-icon-s-grid',
                    breadcrumbClick: true,
                    url: 'http://www.baidu.com'
                }
            },
            {
                path: 'weibo',
                name: 'outside-weibo',
                component: loadView('outside/index'),
                meta: {
                    title: '微博',
                    icon: 'el-icon-s-grid',
                    breadcrumbClick: true,
                    url: 'http://www.weibo.com'
                }
            },
            {
                path: 'bilibili',
                name: 'outside-bilibili',
                component: loadView('outside/index'),
                meta: {
                    title: 'Bilibili',
                    icon: 'el-icon-s-grid',
                    breadcrumbClick: true,
                    url: 'http://www.bilibili.com'
                }
            }
        ]
    }
];

export default routes;