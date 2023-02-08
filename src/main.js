import Vue from 'vue'

import VueRouter from 'vue-router'
Vue.use(VueRouter)

import VueResource from 'vue-resource';
Vue.use(VueResource);

import App from './App.vue'

const AllNFS = require('./assets/js/components/all-nfs.vue');
const Login = require('./assets/js/components/login-nfs.vue');

const routes = [
    {
        name: 'all-nfs',
        path: '/',
        component: AllNFS
    },
	{
		name: 'login_nfs',
		path: '/login',
		component: Login
    },
];
var router = new VueRouter({ routes: routes, mode: 'history' });
new Vue(Vue.util.extend({ router }, App)).$mount('#app');