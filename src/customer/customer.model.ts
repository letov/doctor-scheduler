import {
  PrimaryGeneratedColumn,
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Factory } from 'nestjs-seeder';

export interface ICustomer {
  id: number;
  name: string;
  phone: string;
  created_at: Date;
  updated_at: Date;
}

@Entity()
export class Customer implements ICustomer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    length: 50,
  })
  @Factory((faker) => faker.name.fullName())
  name: string;

  @Column({
    length: 50,
    unique: true,
  })
  @Factory((faker) => faker.phone.number())
  phone: string;

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
