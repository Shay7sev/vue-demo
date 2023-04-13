import request from '@/utils/request';

export function register(data: object) {
  return request({
    url: '/api/dataCenter/user/register',
    method: 'post',
    data,
  });
}

export function getUserInfo(params: object) {
  return request({
    url: '/api/user_info',
    method: 'get',
    params,
  });
}
