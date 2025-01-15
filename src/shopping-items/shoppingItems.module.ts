import { Module } from '@nestjs/common';
import { LoggingPlugin } from '../common/plugins/logging.plugin';
import { ShoppingItemsResolver } from './shoppingItems.resolver';
import { ShoppingItemsService } from './shoppingItems.service';

@Module({
  imports: [],
  // FIXME fix the repeating logs
  providers: [ShoppingItemsService, ShoppingItemsResolver, LoggingPlugin],
})
export class ShoppingItemsModule {}
