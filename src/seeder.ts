import { seeder } from 'nestjs-seeder';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmAsyncConfig } from './config/typeorm.config';
import { DoctorSeeder } from './doctor/doctor.seeder';
import { Doctor } from './doctor/doctor.model';
import { Speciality } from './speciality/speciality.model';

seeder({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync(typeOrmAsyncConfig),
    TypeOrmModule.forFeature([Doctor, Speciality]),
  ],
}).run([DoctorSeeder]);
