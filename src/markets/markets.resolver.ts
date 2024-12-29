import { ParseIntPipe } from '@nestjs/common';
import { Args, Query, Resolver } from '@nestjs/graphql';
import { MarketsService } from './markets.service';
import { Market } from '../graphql.schema';

@Resolver('Market')
export class MarketsResolver {
  constructor(private readonly marketsService: MarketsService) {}

  @Query('markets')
  async getMarkets() {
    return this.marketsService.findAll();
  }

  @Query('market')
  async findOneById(
    // possibilites
    // @Root() root: any,
    // @Context() context: any,
    // @Info() info: any,
    @Args('id', ParseIntPipe)
    id: number,
  ): Promise<Market> {
    return this.marketsService.findOneById(id);
  }
}
