import {
  PrimaryGeneratedColumn,
  Entity,
  Column,
  ManyToMany,
  JoinTable,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { DataFactory, Factory } from 'nestjs-seeder';
import { Speciality } from '../../speciality/entities/speciality.entity';

@Entity()
export class Doctor {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    length: 50,
  })
  @Factory((faker) => faker.name.fullName())
  name: string;

  @ManyToMany(() => Speciality, (speciality) => speciality.doctors, {
    cascade: true,
  })
  @JoinTable()
  @Factory(() =>
    DataFactory.createForClass(Speciality).generate(
      1 + Math.floor(Math.random() * 5),
    ),
  )
  specialities: Speciality[];

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
