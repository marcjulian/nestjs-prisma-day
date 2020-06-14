import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Conference {
  @Field(type => Int)
  id: number;
  name: string;
  url: string;
  startDate: Date;
  endDate: Date;
  city: string;
  country: string;
}
