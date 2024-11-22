// src/schedule/hello.ts
import { Provide, Inject, Schedule, CommonSchedule } from '@midwayjs/core';
import { GetPriceService } from '../service/getPrice.service';
import { FormatService } from '../service/format.service';

@Provide()
@Schedule({
  interval: 2333, // 2.333s 间隔
  type: 'worker', // 指定某一个 worker 执行
})
export class HelloCron implements CommonSchedule {
  @Inject()
  getPriceService: GetPriceService;
  @Inject()
  formatService: FormatService;

  // 定时执行的具体任务
  async exec() {
    console.log('kaishi');
    const res = await this.getPriceService.invoke();
    const res1 = await this.getPriceService.sendMessage(
      this.formatService.getFormat(res)
    );
    return res1;
  }
}
