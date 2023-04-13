import { IsNotEmpty, MaxLength, Validate } from 'class-validator';
import { Unique } from 'typeorm';
import { Customer } from '../entities/customer.entity';

export class CreateCustomerDto {
  @IsNotEmpty()
  @MaxLength(50)
  name: string;

  @IsNotEmpty()
  @MaxLength(50)
  phone: string;
}
