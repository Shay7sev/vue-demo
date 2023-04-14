// user.ts
import { defineStore } from 'pinia';

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
