import { seeder } from 'nestjs-seeder';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmAsyncConfig } from './config/typeorm.config';
import { DoctorSeeder } from './doctor/doctor.seeder';
import { Doctor } from './doctor/entities/doctor.entity';
import { Speciality } from './speciality/entities/speciality.entity';
import { Customer } from './customer/entities/customer.entity';
import { CustomerSeeder } from './customer/customer.seeder';

seeder({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync(typeOrmAsyncConfig),
    TypeOrmModule.forFeature([Doctor, Speciality, Customer]),
  ],
}).run([DoctorSeeder, CustomerSeeder]);
