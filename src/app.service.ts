import { Inject, Injectable } from '@nestjs/common';
import { DevConfigService } from './common/providers/DevConfigService';

@Injectable()
export class AppService {
  constructor(
    private readonly devConfigService: DevConfigService,
    @Inject('CONFIG')
    private readonly config: { port: string },
  ) {}
  getHello(): string {
    return (
      'Hello Unique Learning, I will finish this course! ' +
      this.devConfigService.getDBHOST() +
      ' ' +
      'port: ' +
      this.config.port
    );
  }
}
