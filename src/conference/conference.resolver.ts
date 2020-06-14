import { Conference } from './models/conference.model';
import { Resolver, Query } from '@nestjs/graphql';
import { AppService } from 'src/app.service';

@Resolver(of => Conference)
export class ConferenceResolver {
  constructor(private readonly appService: AppService) {}

  @Query(returns => String)
  helloWorld() {
    return this.appService.getHello();
  }

  @Query(returns => [Conference])
  async conferences() {
    return [];
  }
}
