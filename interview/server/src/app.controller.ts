import { Controller, Get, Inject, Param, UseInterceptors} from '@nestjs/common';
import { CACHE_MANAGER, CacheInterceptor, CacheKey } from '@nestjs/cache-manager';
// import { Cache } from 'cache-man/ager';
import { RedisService } from './radis/radis.service';



@Controller()
export class AppController {
    constructor(private readonly redisService: RedisService) {}

  @Get('set/:key/:value')
  async setKey(
    @Param('key') key: string,
    @Param('value') value: string
  ): Promise<string> {
    return this.redisService.setKeyValue(key, value);
  }

  @Get('get/:key')
  async getKey(@Param('key') key: string): Promise<string> {
    return this.redisService.getValue(key);
  }
}
