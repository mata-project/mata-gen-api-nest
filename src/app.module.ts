import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { upperDirectiveTransformer } from './common/directives/upper-case.directive';
import { MarketsModule } from './markets/markets.module';
import { ShoppingItemsModule } from './shopping-items/shoppingItems.module';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    UsersModule,
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
  providers: [],
  exports: [],
})
export class AppModule {}
