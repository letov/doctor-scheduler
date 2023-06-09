import {
  PrimaryGeneratedColumn,
  Entity,
  Column,
  ManyToMany,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Factory } from 'nestjs-seeder';
import { Doctor } from '../../doctor/entities/doctor.entity';

@Entity('specialities')
export class Speciality {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    length: 50,
    nullable: false,
  })
  @Factory((faker) => faker.name.jobTitle())
  name: string;

  @ManyToMany(() => Doctor, (doctor) => doctor.specialities)
  doctors: Doctor[];

  @CreateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
  })
  createdAt: Date;

  @UpdateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
    onUpdate: 'CURRENT_TIMESTAMP(6)',
  })
  updatedAt: Date;
}
