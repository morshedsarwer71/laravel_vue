require('./bootstrap');
//window.Vue = require('vue');
import Vue from 'vue';
import routes from './router/index'
Vue.component('app-header', require('./components/Header.vue').default);
const app = new Vue({
    el: '#app',
    router:routes,
});
