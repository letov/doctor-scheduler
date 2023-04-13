
import { Injectable } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import { ScheduleService } from '../schedule/schedule.service';
import { NotificationService } from '../notification/notification.service';

@Injectable()
export class CronjobService {
  constructor(
    private readonly scheduleService: ScheduleService,
    private readonly notificationService: NotificationService,
  ) {}

  @Cron('*/90 * * * * *')
  notificationHourly() {
    this.scheduleService
      .getSchedulesBeforeAppointment(1)
      .then((schedules) =>
        schedules.map((schedule) => this.notificationService.send(schedule)),
      );
  }

  @Cron('30 09 * * * *')
  notificationDaily() {
    this.scheduleService
      .getSchedulesBeforeAppointment(24)
      .then((schedules) =>
        schedules.map((schedule) => this.notificationService.send(schedule)),
      );
  }
}
