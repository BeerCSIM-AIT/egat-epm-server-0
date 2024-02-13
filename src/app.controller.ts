import { Controller, Get, Post, Put, Delete, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  root(): string {
    return 'Hello';
  }

  @Get('about')
  about(): string {
    return 'About';
  }

  @Get('contact')
  contact(): string {
    return 'Contact';
  }

  @Post()
  create(): string {
    return 'Created';
  }

  @Put(':id')
  update(@Param('id') id: string): string {
    return `Updated ${id}`;
  }

  @Delete(':id')
  delete(@Param('id') id: string): string {
    return `Deleted ${id}`;
  }
}
