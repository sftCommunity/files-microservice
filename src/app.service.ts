import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getFile(filename: string): string {
    return filename;
  }
}
