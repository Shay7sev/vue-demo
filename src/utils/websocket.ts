import { WsStore } from '@/store/modules/ws';
import { ElMessage } from 'element-plus';

let socket: WebSocket | null = null;
let lockReconnect = false; //是否真正建立连接
// let timeout = 20 * 1000; //20秒一次心跳
let timeoutObj: string | number | NodeJS.Timeout | null | undefined = null; //心跳心跳倒计时
let serverTimeoutObj: string | number | NodeJS.Timeout | null | undefined =
  null; //心跳倒计时
let timeoutnum: string | number | NodeJS.Timeout | null | undefined = null;
// let global_callback: ((arg0: any) => void) | null = null;
let weburl: string | URL =
  import.meta.env.VITE_ENV === 'production' ? 'wss' : 'ws://121.40.165.18:8800';

const storeWs = WsStore();

export const sendWebsocket = function (agentData: any, callback: any) {
  // global_callback = callback;
  console.log(callback);
  socketOnSend(agentData);
};

/**
 * 关闭websocket函数
 */
export const closeWebsocket = function () {
  if (socket) {
    socket.close();
    console.log('退出页面主动断开连接');
  }
  timeoutObj && clearTimeout(timeoutObj);
  serverTimeoutObj && clearTimeout(serverTimeoutObj);
  socket = null;
};

export const initWebSocket = function (url?: string | undefined) {
  if (url) weburl = url;
  if (!window.WebSocket) {
    ElMessage.error({
      message: '您的浏览器不支持websocket,请升级或更换浏览器！',
      type: 'error',
      center: true,
    });
    return;
  }
  if (!socket) {
    socket = new WebSocket(weburl);
    socketOnOpen();
    socketOnClose();
    socketOnError();
    socketOnMessage();
  }
};

const reconnect = () => {
  if (lockReconnect) {
    return;
  }
  lockReconnect = true;
  //没连接上会一直重连，设置延迟避免请求过多
  timeoutnum && clearTimeout(timeoutnum);
  timeoutnum = setTimeout(function () {
    socket = null;
    //新连接
    initWebSocket();
    lockReconnect = false;
  }, 5000);
};
//重置心跳
// const reset = () => {
//     //清除时间
//     timeoutObj && clearTimeout(timeoutObj);
//     serverTimeoutObj && clearTimeout(serverTimeoutObj);
//     //重启心跳
//     start();
// };
//开启心跳
// const start = () => {
//     timeoutObj && clearTimeout(timeoutObj);
//     serverTimeoutObj && clearTimeout(serverTimeoutObj);
//     timeoutObj = setTimeout(function() {
//         //这里发送一个心跳，后端收到后，返回一个心跳消息，
//         if (socket && socket.readyState == 1) {
//             //如果连接正常
//             socket.send('{"toUserId":"1"}');
//             console.log("发送消息");
//         } else {
//             //否则重连
//             reconnect();
//         }
//         serverTimeoutObj = setTimeout(function() {
//             //超时关闭
//             socket && socket.close();
//         }, timeout);
//     }, timeout);
// };

const socketOnOpen = () => {
  if (socket)
    socket.onopen = () => {
      console.log('socket连接成功');
      // start();
    };
};

const socketOnClose = () => {
  if (socket)
    socket.onclose = () => {
      console.log('socket已经关闭');
    };
};

const socketOnSend = (data: any) => {
  //数据发送
  if (socket) socket.send(data);
};

const socketOnError = () => {
  if (socket)
    socket.onerror = () => {
      reconnect();
      console.log('socket 链接失败');
    };
};

const socketOnMessage = () => {
  if (socket)
    socket.onmessage = (e: { data: any }) => {
      if (e.data) {
        const obj = JSON.parse(e.data);
        if (obj.ws_type === 'convert') {
          storeWs.setWsConvert(obj);
        }
      }
      // reset();
    };
};
