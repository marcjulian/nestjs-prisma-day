# NestJS w/ Prisma

Setup and run nest application

```bash
npm i

npm run prisma:up
npm run prisma:seed

npm run start:dev
```

REST API is available in the Swagger API - [localhost:3000/api](http://localhost:3000/api).

GraphQL API available in the GraphQL Playground - [localhost:3000/graphql](http://localhost:3000/graphql)

> GraphQL schema is constructed using the [Code-First approach](https://docs.nestjs.com/graphql/quick-start#code-first) from `@nestjs/graphql` package
