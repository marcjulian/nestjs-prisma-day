import { Conference } from './models/conference.model';
import { Resolver, Query } from '@nestjs/graphql';
import { AppService } from 'src/app.service';
import { PrismaService } from 'src/prisma/prisma.service';

@Resolver(of => Conference)
export class ConferenceResolver {
  constructor(
    private readonly appService: AppService,
    private readonly prismaService: PrismaService,
  ) {}

  @Query(returns => String)
  helloWorld() {
    return this.appService.getHello();
  }

  @Query(returns => [Conference])
  async conferences(): Promise<Conference[]> {
    return this.prismaService.conference.findMany();
  }
}
