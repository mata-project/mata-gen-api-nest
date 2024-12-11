import { ParseIntPipe } from '@nestjs/common';
import { Args,Query, Resolver } from '@nestjs/graphql';
import { PubSub } from 'graphql-subscriptions';
import {MarketsService} from './markets.service';
import {Market} from '../graphql.schema';

@Resolver('Market')
export class MarketsResolver {
  constructor(private readonly marketsService: MarketsService) {}

  @Query('markets')
  async getCats() {
    return this.marketsService.findAll();
  }

  @Query('market')
  async findOneById(
    @Args('id', ParseIntPipe)
    id: number,
  ): Promise<Market> {
    return this.marketsService.findOneById(id);
  }
}
