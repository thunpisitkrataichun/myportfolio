import { Body, Controller, Get, Post, Query } from '@nestjs/common';
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

  @Get('findOne')
  getOneUser(@Query('username') username: string) {
    return this.usersService.findByUsername(username);
  }

  @Get('validate') // ลบ :username/:password ออก
  validateUser(
    @Query('username') username: string, // เปลี่ยนจาก @Param เป็น @Query
    @Query('password') password: string,
  ) {
    console.log(`Validating user: ${username} with password: ${password}`);
    return this.usersService.validateUser(username, password);
  }

  @Post('createUser')
  createUser(@Body() createUsersDto: CreateUsersDto) {
    return this.usersService.createUser(createUsersDto);
  }
}
