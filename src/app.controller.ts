import { Controller, Delete, Get, Post, Put, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { data, ReportType } from 'src/data';

@Controller('report/:type')
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getAllReports(@Param('type') type: string) {
    console.log(type);
    const reportType = type === "income" ? ReportType.INCOME : ReportType.EXPENSE;
    return data.report.filter((report) => report.type === reportType);
  }

  @Get(':id')
  getIncomeReportById(@Param('type') type: string, @Param('id') id: string) {
    console.log({ type, id });
    const reportType = type === "income" ? ReportType.INCOME : ReportType.EXPENSE;
    return data.report
      .filter((report) => report.type === reportType)
      .find(report => report.id === id);
  }

  @Post()
  createReport() {
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
