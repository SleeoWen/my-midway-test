import { Controller, Get, Inject, Context } from '@midwayjs/core';
import { GetPriceService } from '../service/getPrice.service';
import { FormatService } from '../service/format.service';
import { HelloCron } from '../schedule/hello';

@Controller('/')
export class HomeController {
  @Inject()
  ctx: Context;
  @Inject()
  getPriceService: GetPriceService;
  @Inject()
  formatService: FormatService;
  @Get('/')
  async home(): Promise<any> {
    const helloCron = await this.ctx.requestContext.getAsync<HelloCron>(
      'helloCron'
    );
    await helloCron.exec();
    // const res = await this.getPriceService.invoke();
    // const res1 = await this.getPriceService.sendMessage(
    //   this.formatService.getFormat(res)
    // );
    // return res1;
  }
}
