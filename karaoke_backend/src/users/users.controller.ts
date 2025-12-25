import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUsersDto } from './dto/create-users.dto';

@Controller('users')
export class UsersController {
  constructor(readonly usersService: UsersService) {}

  @Get()
  getAllUsers() {
    return this.usersService.findAll();
  }

  @Get('test')
  getTest() {
    return 'This is a test endpoint';
  }

  // แก้ไข: ใช้ @Query เพื่อรับค่าจาก /users/findOne?username=john
  @Get('findOne')
  getOneUser(@Query('username') username: string) {
    return this.usersService.findByUsername(username);
  }

  // แก้ไข: หากต้องการใช้ @Param ต้องระบุโครงสร้าง path ใน @Get
  // URL จะเป็น: /users/validate/john/1234
  @Get('validate/:username/:password')
  validateUser(
    @Param('username') username: string,
    @Param('password') password: string,
  ) {
    return this.usersService.validateUser(username, password);
  }

  @Post('createUser')
  createUser(@Body() createUsersDto: CreateUsersDto) {
    return this.usersService.createUser(createUsersDto);
  }
}
