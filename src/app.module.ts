import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { HangouteventsModule } from './hangoutevents/hangoutevents.module';

@Module({
  imports: [PrismaModule, HangouteventsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
