import vue from 'vue';
import vuerouter from 'vue-router';
//import { component } from 'vue/types/umd';
import Home from '../pages/Home.vue';
vue.use(vuerouter);

const routes = new vuerouter(
    {
        mode:'history',
        routes : [
            {
                path: '/',
                component: Home,
                name:'home'
            }
        ]
    }
);

export default routes;
