import { Provide } from '@midwayjs/core';

@Provide()
export class FormatService {
  getFormat(options: any) {
    const params = options['国内黄金'];
    let res = '### 国内金价信息\n\n';
    res += '| **品种** | **最新价** | **涨跌** | **幅度** |\n';
    res += '| :----: | :----: | :----: | :----: |\n';
    params.forEach((item: any) => {
      res += `| ${item['品种']} | ${item['最新价']} | ${item['涨跌']} | ${item['幅度']} |\n`;
    });
    // const res = options['国内黄金'];
    return res;
  }
}
