import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { upperDirectiveTransformer } from './common/directives/upper-case.directive';
import { MarketsModule } from './markets/markets.module';
import { LoggingPlugin } from './common/plugins/logging.plugin';

@Module({
  imports: [
    MarketsModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      // prop for playground
      //playground: false,
      typePaths: ['./**/*.graphql'],
      //TODO remove this logic
      transformSchema: (schema) => upperDirectiveTransformer(schema, 'upper'),
      installSubscriptionHandlers: true,
    }),
  ],
  providers: [],
})
export class AppModule {}
