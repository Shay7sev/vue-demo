// request.ts
import axios from 'axios';
import { ElMessage } from 'element-plus';
// 导入pinia
import { userStore } from '@/store/modules/user';

import { router } from '@/router/index';

// 创建axios
const $http = axios.create({
  //设置默认请求地址
  baseURL: import.meta.env.VITE_BASE_API,
  //设置请求超时时间
  timeout: 10000,
  //设置请求头
  // headers: {
  //   'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
  // },
});
// 请求拦截器
$http.interceptors.request.use(
  (config) => {
    /* 注： nginx会过滤下划线参数  */
    const storeUser = userStore();
    // 一般下载上传需要传递contentType参数
    if (config.contentType) config.headers['Content-Type'] = config.contentType;
    // 上传在header中传参数
    if (config.isUpload) {
      config.headers['id'] = config.id;
      if (config.parent_dir)
        config.headers['parent-dir'] = encodeURIComponent(
          config.parent_dir as string
        );
      config.headers['uploader'] = encodeURIComponent(
        config.uploader as string
      );
      config.headers['description'] = encodeURIComponent(
        config.description as string
      );
      config.timeout = 1000 * 60 * 60;
    }

    if (storeUser.userInfo.open_id)
      config.headers['open-id'] = storeUser.userInfo.open_id;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

//响应拦截
$http.interceptors.response.use(
  (res) => {
    // 状态码为200正常返回
    if (res.status === 200) {
      return Promise.resolve(res);
    } else {
      return Promise.reject(res);
    }
  },
  (error) => {
    const storeUser = userStore();
    const res = error.response || {};
    if (res.status === 400) {
      ElMessage({
        message: res.data,
        type: 'error',
      });
      return Promise.reject(error);
    }
    if (res.status === 403) {
      ElMessage({
        message: res.data,
        type: 'error',
      });
      storeUser.resetState().then(() => {
        router.replace('login');
        return Promise.reject(error);
      });
    } else {
      return Promise.reject(error);
    }
  }
);

// 导出封装的axios
export default $http;
