import { Controller, Get } from '@nestjs/common';

@Controller() // ว่างไว้แบบนี้คือ route หลัก (/)
export class AppController {
  @Get() // ตรวจสอบว่ามี @Get() ตกแต่งอยู่เหนือ function
  getHello(): string {
    return 'เชื่อมต่อสำเร็จแล้ว! NestJS รันอยู่ที่พอร์ต ' + (process.env.PORT ?? 8000);
  }
}