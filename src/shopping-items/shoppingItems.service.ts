import { Injectable } from '@nestjs/common';
import { ShoppingItem } from '../graphql.schema';

@Injectable()
export class ShoppingItemsService {
  private readonly shoppingItems: Array<ShoppingItem> = [
    { id: 1, name: 'Ekmek' },
    { id: 2, name: 'Su' },
  ];

  findShoppingItemsByUserId(userId: number): ShoppingItem[] {
    return this.shoppingItems;
  }
}
