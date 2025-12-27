import { Body, Controller, Post } from '@nestjs/common';
import { CustomersService } from './customers.service';
import { CreateCustomerDto } from './dto/create-customer.dto';
@Controller('customers')
export class CustomersController {
  constructor(readonly customersService: CustomersService) {}

  @Post('createCustomer')
  createCustomer(@Body() createCustomersDto: CreateCustomerDto) {
    return this.customersService.createCustomer(createCustomersDto);
  }
}
