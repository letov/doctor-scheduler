import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Customer } from './entities/customer.entity';

@Injectable()
export class CustomersService {
  constructor(
    @InjectRepository(Customer)
    private repositoryCustomer: Repository<Customer>,
  ) {}

  create(createCustomerDto: CreateCustomerDto) {
    return this.repositoryCustomer
      .save(createCustomerDto)
      .then((customer) => {
        return customer;
      })
      .catch(() => {
        return new HttpException('some error', HttpStatus.BAD_REQUEST);
      });
  }

  findAll() {
    return this.repositoryCustomer.find();
  }

  findOne(id: number) {
    return this.repositoryCustomer.findOneBy({ id });
  }

  update(id: number, updateCustomerDto: UpdateCustomerDto) {
    return this.repositoryCustomer
      .update(id, updateCustomerDto)
      .then((customer) => {
        return customer;
      })
      .catch(() => {
        return new HttpException('some error', HttpStatus.BAD_REQUEST);
      });
  }

  remove(id: number) {
    return this.repositoryCustomer.delete(id);
  }
}
