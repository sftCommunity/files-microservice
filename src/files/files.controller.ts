import { Controller } from '@nestjs/common';
import { FilesService } from './files.service';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Controller('files')
export class FilesController {
  constructor(private readonly filesService: FilesService) {}

  @MessagePattern('files.get.file')
  async getFile(@Payload('fileName') fileName: string): Promise<any> {
    return this.filesService.getFile(fileName);
  }
}
