import { Test, TestingModule } from '@nestjs/testing';
import { HangouteventsController } from './hangoutevents.controller';
import { HangouteventsService } from './hangoutevents.service';

describe('HangouteventsController', () => {
  let controller: HangouteventsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HangouteventsController],
      providers: [HangouteventsService],
    }).compile();

    controller = module.get<HangouteventsController>(HangouteventsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
