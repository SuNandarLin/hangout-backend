import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { HangouteventsService } from './hangoutevents.service';
import { CreateHangouteventDto } from './dto/create-hangoutevent.dto';
import { UpdateHangouteventDto } from './dto/update-hangoutevent.dto';

@Controller('hangoutevents')
export class HangouteventsController {
  constructor(private readonly hangouteventsService: HangouteventsService) {}

  @Post()
  create(@Body() createHangouteventDto: CreateHangouteventDto) {
    return this.hangouteventsService.create(createHangouteventDto);
  }

  @Get()
  findAll() {
    return this.hangouteventsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.hangouteventsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateHangouteventDto: UpdateHangouteventDto) {
    return this.hangouteventsService.update(+id, updateHangouteventDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.hangouteventsService.remove(+id);
  }
}
