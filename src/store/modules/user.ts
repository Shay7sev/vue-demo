// user.ts
import { defineStore } from 'pinia';
import { register, getUserInfo } from '@/api/modules/login';

const defaultState: { [key: string]: string } = {
  username: 'testuser',
  password: '',
};

export const userStore = defineStore('user', {
  state: () => ({
    userInfo: Object.assign({}, defaultState),
  }),
  getters: {
    // password():string{
    //   return this.userInfo.password
    // },
  },
  actions: {
    setState(info: object) {
      this.userInfo = Object.assign(this.userInfo, info);
    },
    login(info: { [key: string]: string }) {
      return new Promise<void>((resolve, reject) => {
        // this.setState(info)
        // resolve()
        register(info)
          .then(() => {
            this.setState(info);
            resolve();
          })
          .catch((err: any) => {
            reject(err);
          });
      });
    },
    getInfo(token: { access_token: string }) {
      return new Promise<void>((resolve, reject) => {
        // this.setState(info)
        // resolve()
        getUserInfo(token)
          .then((response) => {
            const res = response.data;
            this.setState(res);
            resolve();
          })
          .catch((err: any) => {
            reject(err);
          });
      });
    },
    resetState() {
      return new Promise<void>((resolve) => {
        // must remove  token  first
        // removeToken()
        this.userInfo = Object.assign({}, defaultState);
        resolve();
      });
    },
  },
});
