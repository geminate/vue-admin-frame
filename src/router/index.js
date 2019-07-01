import Vue from 'vue';
import Router from 'vue-router';

import constRoutes from './constRoutes';
import curdRoutes from './curdRoutes';
import nestRoutes from './nestRoutes';
import outsideRoutes from './outsideRoutes';

Vue.use(Router);

export default new Router({
    routes: [
        ...constRoutes,
        ...curdRoutes,
        ...nestRoutes,
        ...outsideRoutes
    ]
})
