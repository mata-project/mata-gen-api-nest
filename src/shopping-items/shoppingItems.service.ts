import { Injectable } from '@nestjs/common';
import { ShoppingItem } from '../graphql.schema';

@Injectable()
export class ShoppingItemsService {
  private readonly shoppingItems: Array<ShoppingItem> = [];

  findShoppingItemsByUserId(userId: number): ShoppingItem[] {
    return this.shoppingItems;
  }

  addShoppingItem(userId: number, shoppingItem: ShoppingItem): ShoppingItem {
    this.shoppingItems.push(shoppingItem);
    return shoppingItem;
  }

  deleteShoppingItem(userId: number, shoppingItemId: number): ShoppingItem {
    const index = this.shoppingItems.findIndex(
      (item) => item.id === shoppingItemId,
    );
    if (index !== -1) {
      const deletedItem = this.shoppingItems.splice(index, 1)[0];
      return deletedItem;
    }
    return null;
  }
}
