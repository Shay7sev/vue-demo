import { defineStore } from 'pinia';
import { WsState } from '../interface';

// defineStore 调用后返回一个函数，调用该函数获得 Store 实体
export const WsStore = defineStore({
  // id: 必须的，在所有 Store 中唯一
  id: 'WsState',
  // state: 返回对象的函数
  state: (): WsState => ({
    // messageList
    messageList: {
      convert: {
        info: '',
        group_uuid: '',
      },
    },
  }),
  getters: {},
  actions: {
    // setWsConvert
    setWsConvert(obj: object) {
      this.messageList.convert = Object.assign({}, obj);
    },
  },
});
