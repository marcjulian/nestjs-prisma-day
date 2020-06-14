import { PrismaService } from './prisma/prisma.service';
import { Controller, Get, Param } from '@nestjs/common';
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
  async conferences(): Promise<Conference[]> {
    return this.prismaService.conference.findMany();
  }

  @Get('conferences/:id')
  async conference(@Param('id') id: string): Promise<Conference> {
    return this.prismaService.conference.findOne({ where: { id: +id } });
  }
}
