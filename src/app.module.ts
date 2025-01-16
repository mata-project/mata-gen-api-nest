import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { upperDirectiveTransformer } from './common/directives/upper-case.directive';
import { MarketsModule } from './markets/markets.module';
import { LoggingPlugin } from './common/plugins/logging.plugin';
import { ShoppingItemsModule } from './shopping-items/shoppingItems.module';
import { DatabaseService } from './db';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MarketsModule,
    ShoppingItemsModule,
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
  providers: [DatabaseService],
  exports: [],
})
export class AppModule {}
