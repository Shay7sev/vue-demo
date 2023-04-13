import { router } from './index';
import NProgress from '@/config/nprogress';
import { userStore } from '@/store/modules/user';
// import { initDynamicRouter } from "@/routers/modules/dynamicRouter";

const routeWhiteList = ['/login'];

// 设置前置路由守卫
router.beforeEach(async (to, from, next) => {
  // 进度条开始
  false && console.log(from);
  NProgress.start();

  document.title = '环卫云中心-' + (to.meta.title || 'cloudCenter');

  const storeUser = userStore();

  const userInfo: { [key: string]: string } = storeUser.userInfo;

  // await initDynamicRouter();
  if (userInfo.username) {
    if (to.path === '/login') {
      // if is logged in, redirect to the home page
      next({ path: '/' });
      NProgress.done();
    } else {
      const hasUsername = userInfo.username;

      if (hasUsername) {
        next();
      } else {
        try {
          const info: { [key: string]: string } = storeUser.userInfo;

          if (!info) {
            // 调通getInfo 但是没数据
            await storeUser.resetState();
            next(`/login?redirect=${to.path}`);
            console.log('获取用户数据失败');
            NProgress.done();
          } else {
            next();
          }
        } catch (error) {
          // remove token and go to login page to re-login
          await storeUser.resetState();
          next(`/login?redirect=${to.path}`);
          console.log('kuayu');
          NProgress.done();
        }
      }
    }
  } else {
    /* has no token */
    if (routeWhiteList.indexOf(to.path) !== -1) {
      // in the free login whitelist, go directly
      next();
    } else {
      // other pages that do not have permission to access are redirected to the login page.
      next(`/login?redirect=${to.path}`);
      NProgress.done();
    }
  }
  // next()
});

// 设置后置路由守卫
router.afterEach((to, from, failure) => {
  // finish progress bar
  false && console.log(to, from, failure);
  NProgress.done();
});
