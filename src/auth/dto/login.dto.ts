import { IsNotEmpty, MaxLength } from 'class-validator';

export class LoginDto {
  @IsNotEmpty()
  @MaxLength(50)
  username: string;

  @IsNotEmpty()
  @MaxLength(50)
  password: string;
}
