/// <param name="filesize">文件的大小,传入的是一个bytes为单位的参数</param>
/// <returns>格式化后的值</returns>
export const getSize = (fileSize: number) => {
  if (fileSize < 1024) {
    return fileSize + 'B';
  } else if (fileSize < 1024 * 1024) {
    const temp = fileSize / 1024;
    return temp.toFixed(2) + 'KB';
  } else if (fileSize < 1024 * 1024 * 1024) {
    const temp = fileSize / (1024 * 1024);
    return temp.toFixed(2) + 'MB';
  } else {
    const temp = fileSize / (1024 * 1024 * 1024);
    return temp.toFixed(2) + 'GB';
  }
};
