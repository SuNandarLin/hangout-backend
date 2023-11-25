import { Module } from '@nestjs/common';
import { HangouteventsService } from './hangoutevents.service';
import { HangouteventsController } from './hangoutevents.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [HangouteventsController],
  providers: [HangouteventsService],
  imports: [PrismaModule]
})
export class HangouteventsModule {}
