import router from './router';
import store from './store';
import NProgress from 'nprogress';
import {getToken} from '@/common/auth';
import 'nprogress/nprogress.css';

NProgress.configure({showSpinner: false});

const whiteList = ['/login', '/404'];

router.beforeEach(async (to, from, next) => {
    NProgress.start();
    document.title = to.meta.title || 'vue-admin-frame';
    const hasToken = getToken();
    if (hasToken) {
        if (to.path === '/login') {
            next({path: '/'});
        } else {
            if (!store.getters.haveSetRouter) {
                await store.dispatch('handleRoutes', store.getters.userInfo.pages);
                next({...to, replace: true});
            } else {
                next();
            }
        }
    } else {
        if (whiteList.indexOf(to.path) !== -1) {
            next();
        } else {
            next({path: '/login'});
            NProgress.done();
        }
    }
});

router.afterEach(() => {
    NProgress.done()
});