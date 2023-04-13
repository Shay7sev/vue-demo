export interface Enum {
  [key: number | string]: string;
}

// 后端返回的文件类型英文中文对应
export const fileTypeEnum: Enum = {
  1: '文件夹',
  0: '文件',
};

// data_type 对应的中文
export const dataTypeEnum: Enum = {
  Record: 'record数据集',
  点云: '点云数据集',
  图片: '图片数据集',
  混合: '混合数据集',
};

interface LogoInfo {
  name: string;
  color: string;
  logo: any;
}

interface LogoEnum {
  [key: string]: LogoInfo;
}

export const logoEnum: LogoEnum = {
  Dir: {
    name: '文件夹',
    color: '#ffba00',
    logo: 'folder-fill',
  },
  File: {
    name: 'Record文件',
    color: '#409eff',
    logo: 'file-fill',
  },
  Excel: {
    name: 'Excel',
    color: '#95d475',
    logo: 'excel-fill',
  },
  Image: {
    name: '图片',
    color: '#f56c6c',
    logo: 'image-fill',
  },
  Zip: {
    name: '压缩包',
    color: '#eebe77',
    logo: 'file-zip-fill',
  },
  Text: {
    name: '文档',
    color: ' #b1b3b8',
    logo: 'text-fill',
  },
};

// vehicleType 车辆类型对应的中文
export const vehicleTypeEnum: Enum = {
  XSL: '沙滩车',
  SL1: '三轮车',
  COROLLA: '建图车',
  U1: '独角兽',
  X3S: '麒麟扫地车',
  X3W: '麒麟水车',
  R3S: '麒麟无人化扫地车',
  R3W: '麒麟无人化水车',
  EQ5: '大蚂蚁V1',
  EQ5S: '大蚂蚁V2',
};
