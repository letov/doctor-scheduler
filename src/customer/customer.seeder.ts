import { Injectable } from '@nestjs/common';
import { DataFactory, Seeder } from 'nestjs-seeder';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Customer } from './entities/customer.entity';

@Injectable()
export class CustomerSeeder implements Seeder {
  constructor(
    @InjectRepository(Customer)
    private repositoryCustomer: Repository<Customer>,
  ) {}

  async seed(): Promise<any> {
    const customers = DataFactory.createForClass(Customer).generate(20);

    return this.repositoryCustomer.save(customers);
  }

  async drop(): Promise<any> {
    return this.repositoryCustomer.delete({});
  }
}
