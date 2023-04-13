/* GlobalState */
export interface GlobalState {
  host: string;
  token: string;
  userInfo: any;
  assemblySize: AssemblySizeType;
  language: string;
  themeConfig: ThemeConfigProps;
}

/* themeConfigProp */
export interface ThemeConfigProps {
  maximize: boolean;
  layout: LayoutType;
  primary: string;
  isDark: boolean;
  isGrey: boolean;
  isCollapse: boolean;
  isWeak: boolean;
  breadcrumb: boolean;
  breadcrumbIcon: boolean;
  tabs: boolean;
  tabsIcon: boolean;
  footer: boolean;
}

export type AssemblySizeType = 'default' | 'small' | 'large';

export type LayoutType = 'vertical' | 'classic' | 'transverse' | 'columns';

/* keepAliveState */
export interface keepAliveState {
  keepAliveName: string[];
}

/* AuthState */
export interface AuthState {
  routeName: string;
  authButtonList: {
    [key: string]: string[];
  };
  authMenuList: Menu.MenuOptions[];
}

/* WsState */
export interface WsState {
  messageList: {
    [key: string]: any;
  };
}
