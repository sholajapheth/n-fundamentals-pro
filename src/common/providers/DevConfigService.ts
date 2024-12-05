import { Injectable } from '@nestjs/common';

@Injectable()
export class DevConfigService {
  private readonly DBHOST = 'localhost';
  getDBHOST() {
    return this.DBHOST;
  }
}
