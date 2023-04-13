export const download = (ajax: any, path: string) => {
  ajax({ path: path }).then(
    (response: { data: any; headers: { [x: string]: string } }) => {
      const res = response.data;
      const url = window.URL.createObjectURL(
        new Blob([res], { type: response.headers['content-type'] })
      );
      // 文件名
      const fileName = response.headers['content-disposition']?.split(
        '='
      )[1] as string;
      const a = document.createElement('a');
      a.setAttribute('href', url);
      a.setAttribute('download', fileName.replace(new RegExp('"', 'g'), ''));
      document.body.append(a);
      a.click();
      document.body.removeChild(a);
    }
  );
};

// 获取url中的某个参数值
export const getQueryVariable = (variable: string) => {
  const query = window.location.search.substring(1);
  const vars = query.split('&');
  for (let i = 0; i < vars.length; i++) {
    const pair = vars[i].split('=');
    if (pair[0] === variable) {
      return pair[1];
    }
  }
  return false;
};
