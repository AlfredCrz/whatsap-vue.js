import Vue from 'vue';
import Router from 'vue-router';

import State from './views/State.vue';
import Calls from './views/Calls.vue';
Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/state',
            name: 'state',
            component: State,
        },
        {
            path: '/calls',
            name: 'calls',
            component: Calls,
        }
    ]
});
