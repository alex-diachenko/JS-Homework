import { Controller, Get, Post, Delete, Put, Body, Param, Query } from '@nestjs/common';
import {IQueryParams, IFormula } from './app.interface';
import { IParameters } from './app.interface';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('all')
  getFormula(): IFormula {
    return this.appService.getFormula();
  }

  @Get('get/:id')
  getParameterByID(@Param('id') objectId: number): IParameters {
    return this.appService.getParameterByID(objectId);
  }

  @Post('send-obj')
    addObj(@Body() objectContent: object) {
      return this.appService.addObj(objectContent);
  }

  @Delete('delete/:id')
  deleteObjId(@Param('id') objectId: number):string {
    return this.appService.deleteObjId(objectId);
  }

  @Put ('put')
  putParameterByID(@Body() objectContent: IParameters): string {
    return this.appService.putParameterByID(objectContent);
  }

  @Get('getByQuery')
  getParametersByQuery(@Query() params: IQueryParams): IParameters[] {
    return this.appService.getParametersByQuery(params.min, params.max);
  }
}
