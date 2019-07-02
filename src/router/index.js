import Vue from 'vue';
import Router from 'vue-router';

import constRoutes from './constRoutes';
import curdRoutes from './curdRoutes';
import nestRoutes from './nestRoutes';
import outsideRoutes from './outsideRoutes';

Vue.use(Router);

const createRouter = () => new Router({
    routes: constRoutes
});

const router = createRouter();

export function resetRouter() {
    const newRouter = createRouter();
    router.matcher = newRouter.matcher;
}

export default router;
