import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const graphqlConf = await prisma.conference.create({
    data: {
      name: 'GraphQL Conf',
      url: 'https://www.graphqlconf.org/',
      startDate: '2019-06-20T00:00:00.000Z',
      endDate: '2019-06-21T00:00:00.000Z',
      city: 'Berlin',
      country: 'Germany',
    },
  });
  console.log(graphqlConf);

  const prismaDay = await prisma.conference.create({
    data: {
      name: 'Prisma Day',
      url: 'https://www.prisma.io/day',
      startDate: '2020-06-25T00:00:00.000Z',
      endDate: '2020-06-26T00:00:00.000Z',
      city: 'Online',
      country: 'Germany',
    },
  });

  console.log(prismaDay);

  const jsCamp = await prisma.conference.create({
    data: {
      name: 'JSCamp',
      url: 'https://jscamp.tech/',
      startDate: '2021-07-15T00:00:00.000Z',
      endDate: '2021-07-16T00:00:00.000Z',
      city: 'Barcelona',
      country: 'Spain',
    },
  });

  console.log(jsCamp);
}

main()
  .catch(e => console.error(e))
  .finally(async () => {
    await prisma.disconnect();
  });
