import { Controller, Post, Get, Delete, Body, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('formula')
  getFormula(): string {
    return this.appService.getFormula();
  }

  @Post('send-obj')
    addObj(@Body() objectContent: object) {
      return this.appService.addObj(objectContent);
  }

  @Delete(':id')
  deleteObj(@Param('id') objectId: number) {
    return this.appService.deleteObj(objectId);
  }
}
