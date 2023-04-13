import { Injectable } from '@nestjs/common';
import { Schedule } from '../schedule/entities/schedule.entity';
import { format } from 'date-format';

@Injectable()
export class NotificationService {
  send(schedule: Schedule) {
    const msg = `${schedule.doctor.name}, ${format.asString(
      'dd.mm.yyyy',
      schedule.appointmentAt,
    )}, ${format.asString('hh:mm', schedule.appointmentAt)}, clinic address`;

    console.log('send', msg, schedule.customer.phone);
  }
}
