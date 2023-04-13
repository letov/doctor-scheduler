import { IsDate, IsNotEmpty } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateScheduleDto {
  @IsNotEmpty()
  customerId: number;

  @IsNotEmpty()
  doctorId: number;

  @IsNotEmpty()
  @IsDate()
  @Type(() => Date)
  appointmentAt: Date;
}
