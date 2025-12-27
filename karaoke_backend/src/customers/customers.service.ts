import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { Repository } from 'typeorm';
import { Customers } from './customers.entity';

@Injectable()
export class CustomersService {
  constructor(
    @InjectRepository(Customers)
    private customersRepository: Repository<Customers>,
  ) {}
  createCustomer(
    createCustomersDto: CreateCustomerDto,
  ): Promise<Customers | null> {
    if (!createCustomersDto.fullName || !createCustomersDto.username) {
      return Promise.resolve(null);
    }
    const newCustomer = this.customersRepository.create(createCustomersDto);
    return this.customersRepository.save(newCustomer);
  }
}
