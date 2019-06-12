import Vue from 'vue';
import App from './App';
import router from './router';
import Element from 'element-ui';
import validate from '@/common/validate';

import 'element-ui/lib/theme-chalk/index.css';
import 'reset.css/reset.css';
import '@/assets/css/main.less';

Vue.use(Element);

Vue.prototype.$validate = validate;

Vue.config.productionTip = false;

new Vue({
    el: '#app',
    router,
    components: {App},
    template: '<App/>'
});
