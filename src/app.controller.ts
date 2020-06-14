import { PrismaService } from './prisma/prisma.service';
import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiTags } from '@nestjs/swagger';
import { Conference } from '@prisma/client';

@Controller()
@ApiTags('prisma')
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly prismaService: PrismaService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('conferences')
  async getConferences(): Promise<Conference[]> {
    return this.prismaService.conference.findMany();
  }
}
