import { Login } from '@/api/interface/index';
import { PORT1 } from '@/api/config/servicePort';
import DynamicRouter from '@/assets/json/dynamicRouter.json';
// import qs from 'qs';
import http from '@/api';

/**
 * @name 登录模块
 *
  return http.post<Login.ResLogin>(PORT1 + `/login`, {}, { params }); // post 请求携带 query 参数  ==>  ?username=admin&password=123456
  return http.post<Login.ResLogin>(PORT1 + `/login`, qs.stringify(params)); // post 请求携带表单参数  ==>  application/x-www-form-urlencoded
  return http.get<Login.ResLogin>(
    PORT1 + `/login?${qs.stringify(params, { arrayFormat: 'repeat' })}`
  ); // 如果是 get 请求可以携带数组等复杂参数
 */

// * 用户登录
export const loginApi = (params: Login.ReqLoginForm) => {
  return http.post<Login.ResLogin>(PORT1 + `/login`, params, {}); // 控制当前请求不显示 loading
};

// * 获取菜单列表
export const getAuthMenuListApi = () => {
  // return http.get<Menu.MenuOptions[]>(
  //   PORT1 + `/menu/list`,
  //   {},
  //   { headers: { noLoading: true } }
  // );
  return DynamicRouter;
};
