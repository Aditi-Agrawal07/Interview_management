import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import Redis from 'ioredis';

@Injectable()
export class RedisService implements OnModuleInit, OnModuleDestroy {
  private redisClient: Redis;

  onModuleInit() {
    this.redisClient = new Redis({
      host: 'localhost',  // Default host
      port: 6379,         // Default port
    });
  }

  async setKeyValue(key: string, value: string): Promise<string> {
    await this.redisClient.set(key, value);
    return `Key ${key} set successfully.`;
  }

  async getValue(key: string): Promise<string> {
    return await this.redisClient.get(key);
  }

  onModuleDestroy() {
    this.redisClient.quit();
  }
}
