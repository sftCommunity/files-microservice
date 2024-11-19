import { Injectable } from '@nestjs/common';

@Injectable()
export class FilesService {
  async getFile(fileName: string) {
    return fileName;
  }
}
