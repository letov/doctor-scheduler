import { seeder } from 'nestjs-seeder';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmAsyncConfig } from './config/typeorm.config';
import { DoctorSeeder } from './doctors/doctor.seeder';
import { Doctor } from './doctors/entities/doctor.entity';
import { Speciality } from './specialities/entities/speciality.entity';

seeder({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync(typeOrmAsyncConfig),
    TypeOrmModule.forFeature([Doctor, Speciality]),
  ],
}).run([DoctorSeeder]);
