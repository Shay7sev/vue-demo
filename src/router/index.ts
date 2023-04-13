// index.ts
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
// import Layout from '@/components/layout/index.vue'
import Layout from '@/layouts/index.vue';

// 添加类型校验
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/home',
  },
  // {
  //   path: '/login',
  //   name: 'login',
  //   component: () => import('@/views/Login.vue'),
  // },
  {
    path: '/home',
    component: Layout,
    redirect: '/home/cloud',
    children: [
      {
        path: '/home/cloud',
        name: 'cloud',
        meta: { title: '环卫云' },
        component: () =>
          import(/* webpackChunkName: "cloud" */ '@/views/cloud/index.vue'),
      },
    ],
  },
];

// 创建router
const router = createRouter({
  // 配置为Hash模式
  history: createWebHashHistory(),
  // history: createWebHistory(import.meta.env.BASE_URL),
  // 配置toures
  routes,
  // 路由跳转时返回顶部
  scrollBehavior() {
    return { top: 0 };
  },
});

// // 设置前置路由守卫
// router.beforeEach((to, from, next) => {
//   next()
// })

// // 设置后置路由守卫
// router.afterEach((to, from, failure) => {

// })

export { router };
