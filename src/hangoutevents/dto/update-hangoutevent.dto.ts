import { PartialType } from '@nestjs/swagger';
import { CreateHangouteventDto } from './create-hangoutevent.dto';

export class UpdateHangouteventDto extends PartialType(CreateHangouteventDto) {}
