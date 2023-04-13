import { IsNotEmpty, MaxLength } from 'class-validator';

export class CreateCustomerDto {
  @IsNotEmpty()
  @MaxLength(50)
  name: string;

  @IsNotEmpty()
  @MaxLength(50)
  phone: string;
}
