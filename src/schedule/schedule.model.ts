import {
  PrimaryGeneratedColumn,
  Entity,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
} from 'typeorm';
import { Doctor } from '../doctor/doctor.model';
import { Customer } from '../customer/customer.model';

export interface ISchedule {
  id: number;
  customer: Customer;
  doctor: Doctor;
  appointment_at: Date;
  created_at: Date;
  updated_at: Date;
}

@Entity()
export class Schedule implements ISchedule {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Customer)
  customer: Customer;

  @ManyToOne(() => Doctor)
  doctor: Doctor;

  @CreateDateColumn({
    type: 'timestamp',
    nullable: false,
  })
  appointment_at: Date;

  @CreateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
  })
  created_at: Date;

  @UpdateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
    onUpdate: 'CURRENT_TIMESTAMP(6)',
  })
  updated_at: Date;
}
