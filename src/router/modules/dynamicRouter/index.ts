// import { router } from '@/router/index';

// 引入 views 文件夹下所有 vue 文件

/**
 * 初始化动态路由
 */
export const initDynamicRouter = async () => {
  try {
    // 1.获取菜单列表 && 按钮权限（可合并到一个接口获取，根据后端不同可自行改造）
    // await authStore.getAuthButtonList();
    // 2.判断当前用户有没有菜单权限
    // 3.添加动态路由
    // authStore.flatMenuListGet.forEach((item: any) => {
    // 	item.children && delete item.children;
    // 	if (item.component && isType(item.component) == "string") {
    // 		item.component = modules["/src/views" + item.component + ".vue"];
    // 	}
    // 	if (item.meta.isFull) {
    // 		router.addRoute(item);
    // 	} else {
    // 		router.addRoute("layout", item);
    // 	}
    // });
  } catch (error) {
    // catch
    return Promise.reject(error);
  }
};
