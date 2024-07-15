import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  getHello(): string {
    return 'Welcome to the Task Management API';
  }

  @Get('health')
  getHealth(): string {
    return 'OK';
  }
}
