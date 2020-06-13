import Vue from 'vue';
import App from './App';
import VueRouter from 'vue-router';
import store from './store';
import './assets/scss/main.scss';
import Index from './components/Index';

Vue.config.productionTip = false
Vue.use(VueRouter);

const router = new VueRouter({
        mode: 'history',
        routes: [
            {
                path: '/', component: Index
            },
        ]
    }
)

const vue_app = new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app')



