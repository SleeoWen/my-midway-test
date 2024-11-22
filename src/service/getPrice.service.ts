import { HttpService } from '@midwayjs/axios';
import { Provide, Inject } from '@midwayjs/core';
@Provide()
export class GetPriceService {
  @Inject()
  httpService: HttpService;

  async invoke() {
    const url = 'https://api.lolimi.cn/API/huangj/api.php';
    const result: any = await this.httpService.get(url);
    return result.data;
    // TODO result
  }
  async sendMessage(params) {
    const url =
      'https://oapi.dingtalk.com/robot/send?access_token=4ece84c61c0e0e75f9a07dcb6a0bf3f714ad5b26d432caccdc3b31bdb429ccdb';
    this.httpService.post(url, {
      msgtype: 'markdown',
      markdown: {
        title: '国内金价信息',
        text: params,
      },
    });
  }
}
