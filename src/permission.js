import router from './router';
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
            next();
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