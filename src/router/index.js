// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        // component: () => import('@/layouts/default/Default.vue'),
        children: [

            {
                path: '',
                name: 'Home',
                // route level code-splitting
                // this generates a separate chunk (about.[hash].js) for this route
                // which is lazy-loaded when the route is visited.
                component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
            },
            {
                path: '/demos',
                name: 'Demos',
                component: () => import('@/views/Demos.vue'),
            },
            {
                path: '/devblog',
                name: 'DevBlog',
                component: () => import('@/views/DevBlog.vue'),
            },
            {
                path: '/devblog/blog/:uid',
                name: 'Blog',
                props: true,
                component: () => import('@/views/DevBlog.vue'),
            },

            // 404 page
            {
                path: '/:pathMatch(.*)*',
                name: '404',
                component: () => import('@/views/404.vue'),
            },

        ],
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
})

export default router
