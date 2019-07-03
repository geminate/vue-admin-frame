import curdRoutes from './curd';
import nestRoutes from './nest';
import outsideRoutes from './outside';
import systemRoutes from './system';

const loadView = (view) => {
    return () => import(`@/pages/${view}.vue`)
};

const asyncRoutes = [
    ...curdRoutes,
    ...nestRoutes,
    ...outsideRoutes,
    ...systemRoutes,

    // 404 页 需要放在动态路由最后
    {
        path: '*',
        name: '404',
        component: loadView('404/index'),
        meta: {title: '404 未找到', hidden: true},
    },
];

export default asyncRoutes;