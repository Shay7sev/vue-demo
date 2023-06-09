import { defineStore } from 'pinia';
import { keepAliveState } from '@/store/interface';

// KeepAliveStore
export const KeepAliveStore = defineStore({
  id: 'KeepAliveStore',
  state: (): keepAliveState => ({
    keepAliveName: [],
  }),
  actions: {
    // addKeepAliveName
    async addKeepAliveName(name: string) {
      !this.keepAliveName.includes(name) && this.keepAliveName.push(name);
    },
    // removeKeepAliveName
    async removeKeepAliveName(name: string) {
      this.keepAliveName = this.keepAliveName.filter(
        (item: string) => item !== name
      );
    },
    // setKeepAliveName
    async setKeepAliveName(keepAliveName: string[] = []) {
      this.keepAliveName = keepAliveName;
    },
  },
});
