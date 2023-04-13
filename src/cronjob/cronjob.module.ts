import { Module } from '@nestjs/common';
import { CronjobService } from './cronjob.service';
import { ScheduleInnerModule } from '../schedule/scheduleInnerModule';
import { NotificationModule } from '../notification/notification.module';

@Module({
  providers: [CronjobService],
  imports: [ScheduleInnerModule, NotificationModule],
})
export class CronjobModule {}
