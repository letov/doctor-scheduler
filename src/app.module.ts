import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmAsyncConfig } from './config/typeorm.config';
import { CustomerModule } from './customer/customer.module';
import { ScheduleInnerModule } from './schedule/scheduleInnerModule';
import { ScheduleModule } from '@nestjs/schedule';
import { CronjobModule } from './cronjob/cronjob.module';
import { NotificationModule } from './notification/notification.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync(typeOrmAsyncConfig),
    ScheduleModule.forRoot(),
    CustomerModule,
    ScheduleInnerModule,
    NotificationModule,
    CronjobModule,
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
