import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store';
import Element from 'element-ui';
import validate from '@/common/validate';
import api from '@/common/request';

import 'element-ui/lib/theme-chalk/index.css';
import 'reset.css/reset.css';
import '@/assets/css/index.less';

Vue.use(Element);

Vue.prototype.$validate = validate;
Vue.prototype.$api = api;

Vue.config.productionTip = false;

new Vue({
    el: '#app',
    router,
    store,
    components: {App},
    template: '<App/>'
});
