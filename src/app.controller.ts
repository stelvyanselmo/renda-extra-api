import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { CalculateDto } from './dto/calculate.dto';

@Controller('api/v1/renda-extra')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  public calculate(@Body() {tax,amount,time}: CalculateDto): any {
    return this.appService.calculateTamb(tax, amount, time);
  }
}
