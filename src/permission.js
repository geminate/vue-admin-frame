import router from './router';
import NProgress from 'nprogress';
import {getToken} from '@/common/auth';
import 'nprogress/nprogress.css';

NProgress.configure({showSpinner: false});

const whiteList = ['/login']

router.beforeEach(async (to, from, next) => {
    NProgress.start();
    document.title = to.meta.title || 'vue-admin-frame';

    if (getToken()) {
        if (to.path === '/login') {
            next({path: '/'});
            NProgress.done();
        } else {
            next();
        }
    } else {
        if (whiteList.indexOf(to.path) !== -1) {
            next()
        } else {
            next({path: '/login'});
            NProgress.done();
        }
    }
});

router.afterEach(() => {
    NProgress.done()
});