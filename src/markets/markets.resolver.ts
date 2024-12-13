import { ParseIntPipe } from '@nestjs/common';
import { Args, Context, Query, Resolver } from '@nestjs/graphql';
import { MarketsService } from './markets.service';
import { Market } from '../graphql.schema';

@Resolver('Market')
export class MarketsResolver {
  constructor(private readonly marketsService: MarketsService) {}

  @Query('markets')
  async getMarkets(
    @Context()
    context: any,
  ) {
    //for access token
    //console.log(context.req.headers);
    return this.marketsService.findAll();
  }

  @Query('market')
  async findOneById(
    @Args('id', ParseIntPipe)
    @Context()
    context: any,
    id: number,
  ): Promise<Market> {
    return this.marketsService.findOneById(id);
  }
}
