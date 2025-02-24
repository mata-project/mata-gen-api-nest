import { Injectable } from '@nestjs/common';
import { Market, ShoppingItem } from '../graphql.schema';
import { DatabaseService } from '../db';

@Injectable()
export class ShoppingItemsService {
  constructor(private databaseService: DatabaseService) {}

  async findShoppingItemsByUserId(userId: string): Promise<ShoppingItem[]> {
    const result = (
      await this.databaseService.query(
        `SELECT si.id AS item_id, si.item_name, m.id AS market_id, m.name AS market_name FROM shopping_items si JOIN markets m ON si.market_id = m.id WHERE si.user_id = '${userId}' AND si.is_deleted = 0;`,
      )
    ).rows;
    // Map the result to match the ShoppingItem structure
    return result.map((item) => ({
      id: item.item_id,
      name: item.item_name,
      market: {
        id: item.market_id,
        name: item.market_name,
      },
    }));
  }

  // TODO validation
  async addShoppingItem(
    userId: string,
    name: string,
    marketId: number,
  ): Promise<ShoppingItem> {
    const result = await this.databaseService.query(
      `INSERT INTO shopping_items (market_id, user_id, item_name) VALUES (${marketId}, '${userId}', '${name}');`,
    );
    return result ? { name, market: { id: marketId } } : undefined;
  }

  async deleteShoppingItem(
    userId: string,
    shoppingItemId: number,
    marketId: number,
  ): Promise<ShoppingItem> {
    const result = await this.databaseService.query(
      `UPDATE shopping_items SET is_deleted = 1 WHERE id = ${shoppingItemId} AND user_id = '${userId}';`,
    );
    return result
      ? { id: shoppingItemId, name: null, market: { id: marketId } }
      : undefined;
  }
}
