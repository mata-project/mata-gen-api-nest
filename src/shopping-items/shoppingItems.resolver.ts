import { ParseIntPipe } from '@nestjs/common';
import { Args, Query, Resolver } from '@nestjs/graphql';
import { ShoppingItem } from '../graphql.schema';
import { ShoppingItemsService } from './shoppingItems.service';

@Resolver('ShoppingItems')
export class ShoppingItemsResolver {
  constructor(private readonly shoppingItemsService: ShoppingItemsService) {}

  @Query('shoppingItems')
  async getShoppingItems(
    @Args('userId', ParseIntPipe)
    userId: number,
  ): Promise<ShoppingItem[]> {
    // const result: ShoppingItem[] = [{ id: 1, name: 'ekmek' }];
    // return result;
    return this.shoppingItemsService.findShoppingItemsByUserId(1);
  }
}
