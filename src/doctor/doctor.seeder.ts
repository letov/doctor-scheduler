import { Injectable } from '@nestjs/common';
import { DataFactory, Seeder } from 'nestjs-seeder';
import { Doctor } from './doctor.model';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
@Injectable()
export class DoctorSeeder implements Seeder {
  constructor(
    @InjectRepository(Doctor)
    private repositoryDoctor: Repository<Doctor>,
  ) {}

  async seed(): Promise<any> {
    const doctors = DataFactory.createForClass(Doctor).generate(100);

    return this.repositoryDoctor.save(doctors);
  }

  async drop(): Promise<any> {
    return this.repositoryDoctor.delete({});
  }
}
