require('./bootstrap');
//window.Vue = require('vue');
import Vue from 'vue';
import routes from './router/index'
Vue.component('app-header', require('./components/Header.vue').default);
//form validation
import { HasError, AlertError } from 'vform'
//toast message library
import CxltToastr from 'cxlt-vue2-toastr'
import 'cxlt-vue2-toastr/dist/css/cxlt-vue2-toastr.css'
Vue.component(HasError.name, HasError)
Vue.component(AlertError.name, AlertError)
var toastrConfigs = {
    position: 'top right',
    showDuration: 2000,
    progressBar : true
}
Vue.use(CxltToastr, toastrConfigs)
const app = new Vue({
    el: '#app',
    router:routes,
});
