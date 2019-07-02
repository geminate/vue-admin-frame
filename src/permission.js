import router from './router';
import store from './store';
import NProgress from 'nprogress';
import {getToken} from '@/common/auth';
import 'nprogress/nprogress.css';
import utils from '@/common/utils';

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
            if (store.getters.userInfo && store.getters.userInfo.name) {
                next();
            } else {
                const {resultCode, resultMessage, pages} = await store.dispatch('refreshUserInfo');
                if (resultCode == 0) {
                    await store.dispatch('handleRoutes', pages);
                    next({...to, replace: true});
                } else {
                    utils.error(resultMessage);
                    next('/login');
                }
            }
        }
    } else {
        if (whiteList.indexOf(to.path) !== -1) {
            next();
        } else {
            next({path: '/login'});
        }
    }
});

router.afterEach(() => {
    NProgress.done()
});