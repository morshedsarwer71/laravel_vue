import vue from 'vue';
import vuerouter from 'vue-router';
//import { component } from 'vue/types/umd';
import Home from '../pages/home.vue';
import categoryIndex from '../pages/category/index.vue';
import CreateCategory from '../pages/category/create.vue';
vue.use(vuerouter);

const routes = new vuerouter(
    {
        mode:'history',
        routes : [
            {
                path: '/',
                component: Home,
                name:'home'
            },
            {
                path:'/category',
                component: categoryIndex,
                name:'category-list'
            },
            {
                path:'/category/create',
                component: CreateCategory,
                name:'create-category'
            }
        ]
    }
);

export default routes;
