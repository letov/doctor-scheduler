import {
  PrimaryGeneratedColumn,
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Factory } from 'nestjs-seeder';

@Entity('customers')
export class Customer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    length: 50,
    nullable: false,
  })
  @Factory((faker) => faker.name.fullName())
  name: string;

  @Column({
    length: 50,
    unique: true,
    nullable: false,
  })
  @Factory((faker) => faker.phone.number())
  phone: string;

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
