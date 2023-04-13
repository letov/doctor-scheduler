import {
  PrimaryGeneratedColumn,
  Entity,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
} from 'typeorm';
import { Customer } from '../../customer/entities/customer.entity';
import { Doctor } from '../../doctor/entities/doctor.entity';

@Entity('schedules')
export class Schedule {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Customer, {
    nullable: false,
  })
  customer: Customer;

  @ManyToOne(() => Doctor, {
    nullable: false,
  })
  doctor: Doctor;

  @CreateDateColumn({
    type: 'timestamp',
    nullable: false,
  })
  appointmentAt: Date;

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
