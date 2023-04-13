import { Injectable } from '@nestjs/common';
import { DataFactory, Seeder } from 'nestjs-seeder';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Doctor } from './entities/doctor.entity';

@Injectable()
export class DoctorSeeder implements Seeder {
  constructor(
    @InjectRepository(Doctor)
    private repositoryDoctor: Repository<Doctor>,
  ) {}

  async seed(): Promise<any> {
    const doctors = DataFactory.createForClass(Doctor).generate(10);

    return this.repositoryDoctor.save(doctors);
  }

  async drop(): Promise<any> {
    return this.repositoryDoctor.delete({});
  }
}
