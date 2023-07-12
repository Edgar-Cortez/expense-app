import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('report/:type')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getAllReports() {
    return [];
  }

  @Get (':id')
  getIncomeReportById() {
    return {};
  }

  @Post()
  createReport(){
    return 'Created';
  }

  @Put(':id')
  updateReportById() {
    return 'Updated';
  }

  @Delete(':id')
  deleteReportById() {
    return 'Deleted';
  }

}
