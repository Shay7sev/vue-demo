import { CancelToken } from 'axios';
/**
 * 自定义扩展axios模块
 */
declare module 'axios' {
  export interface AxiosRequestConfig {
    /**
     * @description 设置为true，则会在请求过程中显示loading动画，直到请求结束才消失
     */
    loading?: boolean;
    isDialog?: boolean;
    contentType?: string;
    isUpload?: boolean;
    dataset?: number;
    id?: number;
    parent_dir?: string | null;
    uploader?: string;
    description?: string;
    cancelToken?: CancelToken;
  }
  export interface AxiosInstance {
    <T = any>(config: AxiosRequestConfig): Promise<T>;
    request<T = any>(config: AxiosRequestConfig): Promise<T>;
    get<T = any>(url: string, config?: AxiosRequestConfig): Promise<T>;
    delete<T = any>(url: string, config?: AxiosRequestConfig): Promise<T>;
    head<T = any>(url: string, config?: AxiosRequestConfig): Promise<T>;
    post<T = any>(
      url: string,
      data?: any,
      config?: AxiosRequestConfig
    ): Promise<T>;
    put<T = any>(
      url: string,
      data?: any,
      config?: AxiosRequestConfig
    ): Promise<T>;
    patch<T = any>(
      url: string,
      data?: any,
      config?: AxiosRequestConfig
    ): Promise<T>;
  }
}
