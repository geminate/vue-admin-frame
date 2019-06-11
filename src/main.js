import Vue from 'vue';
import App from './App';
import router from './router';
import Element from 'element-ui';
import 'normalize.css/normalize.css';

Vue.use(Element);

Vue.config.productionTip = false;

new Vue({
    el: '#app',
    router,
    components: {App},
    template: '<App/>'
});
