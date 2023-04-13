// 飞书脚本
export function qr_load() {
  return new Promise<void>((resolve, reject) => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src =
      'https://sf3-cn.feishucdn.com/obj/feishu-static/lark/passport/qrcode/LarkSSOSDKWebQRCode-1.0.2.js';
    script.onerror = reject;
    script.onload = () => {
      resolve();
    };
    document.head.appendChild(script);
  });
}

export const APPID = 'cli_a361f9d104fcd00b';
