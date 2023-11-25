import { Test, TestingModule } from '@nestjs/testing';
import { HangouteventsService } from './hangoutevents.service';

describe('HangouteventsService', () => {
  let service: HangouteventsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HangouteventsService],
    }).compile();

    service = module.get<HangouteventsService>(HangouteventsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
