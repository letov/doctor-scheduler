import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateScheduleDto } from './dto/create-schedule.dto';
import { UpdateScheduleDto } from './dto/update-schedule.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Schedule } from './entities/schedule.entity';

@Injectable()
export class ScheduleService {
  private appointmentGapInMinutes = 15;
  private appointmentDurationInMinutes = 45;

  constructor(
    @InjectRepository(Schedule)
    private repositorySchedule: Repository<Schedule>,
  ) {}

  async create(createScheduleDto: CreateScheduleDto) {
    if (await this.existAppointment(createScheduleDto)) {
      return new HttpException('time is busy', HttpStatus.BAD_REQUEST);
    }

    return this.repositorySchedule
      .save({
        ...createScheduleDto,
        doctor: { id: createScheduleDto.doctorId },
        customer: { id: createScheduleDto.customerId },
      })
      .then((schedule) => {
        return schedule;
      })
      .catch(() => {
        return new HttpException('some error', HttpStatus.BAD_REQUEST);
      });
  }

  private async existAppointment(
    createScheduleDto: CreateScheduleDto,
  ): Promise<boolean> {
    const from = new Date(createScheduleDto.appointmentAt);
    const to = new Date(createScheduleDto.appointmentAt);
    from.setMinutes(from.getMinutes() - this.appointmentGapInMinutes);
    to.setMinutes(
      to.getMinutes() +
        this.appointmentDurationInMinutes +
        this.appointmentGapInMinutes,
    );

    return this.repositorySchedule
      .createQueryBuilder('schedule')
      .where('appointment_at > :from')
      .andWhere('appointment_at < :to')
      .andWhere('doctor_id = :doctorId')
      .setParameters({
        from: from.toISOString().slice(0, 19).replace('T', ' '),
        to: to.toISOString().slice(0, 19).replace('T', ' '),
        doctorId: createScheduleDto.doctorId,
      })
      .getExists();
  }

  findAll() {
    return this.repositorySchedule.find();
  }

  findOne(id: number) {
    return this.repositorySchedule.findOneBy({ id });
  }

  update(id: number, updateScheduleDto: UpdateScheduleDto) {
    return this.repositorySchedule
      .update(id, updateScheduleDto)
      .then((schedule) => {
        return schedule;
      })
      .catch(() => {
        return new HttpException('some error', HttpStatus.BAD_REQUEST);
      });
  }

  remove(id: number) {
    return this.repositorySchedule.delete(id);
  }
}
