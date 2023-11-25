import { Injectable } from '@nestjs/common';
import { CreateHangouteventDto } from './dto/create-hangoutevent.dto';
import { UpdateHangouteventDto } from './dto/update-hangoutevent.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class HangouteventsService {
  constructor(private prisma: PrismaService) {}
  create(createHangouteventDto: CreateHangouteventDto) {
    return 'This action adds a new hangoutevent';
  }

  findAll() {
    return this.prisma.event.findMany(); //{ where: { id: 1 }}
  }

  findOne(id: number) {
    return `This action returns a #${id} hangoutevent`;
  }

  update(id: number, updateHangouteventDto: UpdateHangouteventDto) {
    return `This action updates a #${id} hangoutevent`;
  }

  remove(id: number) {
    return `This action removes a #${id} hangoutevent`;
  }
}
