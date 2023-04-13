import { Module } from '@nestjs/common';
import { ScheduleService } from './schedule.service';
import { ScheduleController } from './schedule.controller';
import { TypeOrmModule } from "@nestjs/typeorm";
import { Customer } from "../customer/entities/customer.entity";
import { Schedule } from "./entities/schedule.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Schedule, Customer])],
  controllers: [ScheduleController],
  providers: [ScheduleService],
})
export class ScheduleModule {}
