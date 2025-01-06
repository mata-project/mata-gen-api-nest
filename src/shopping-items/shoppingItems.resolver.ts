import { ParseIntPipe } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
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
    return this.shoppingItemsService.findShoppingItemsByUserId(1);
  }

  @Mutation('addShoppingItem')
  async addShoppingItem(
    @Args('userId', ParseIntPipe)
    userId: number,
    @Args('name')
    name: string,
  ): Promise<ShoppingItem> {
    return this.shoppingItemsService.addShoppingItem(userId, {
      id: Math.floor(Math.random() * 1000),
      name,
    });
  }

  @Mutation('deleteShoppingItem')
  async deleteShoppingItem(
    @Args('userId', ParseIntPipe)
    userId: number,
    @Args('shoppingItemId')
    shoppingItemId: number,
  ): Promise<ShoppingItem> {
    return this.shoppingItemsService.deleteShoppingItem(userId, shoppingItemId);
  }
}
