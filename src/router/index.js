import Vue from 'vue';
import Router from 'vue-router';

import constRoutes from './constRoutes';

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
