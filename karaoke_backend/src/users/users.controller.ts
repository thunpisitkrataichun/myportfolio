import { Body, Controller, Get, Post } from '@nestjs/common';
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
  getOneUser(username: string) {
    // รับค่าจาก URL เช่น /users/findone?username=john
    return this.usersService.findByUsername(username);
  }
  @Post('createUser')
  createUser(@Body() createUsersDto: CreateUsersDto) {
    return this.usersService.createUser(createUsersDto);
  }
}
