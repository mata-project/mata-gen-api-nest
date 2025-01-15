import { Test, TestingModule } from '@nestjs/testing';
import { ShoppingItemsService } from './shoppingItems.service';

describe('ShoppingItemsService', () => {
  let service: ShoppingItemsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ShoppingItemsService],
    }).compile();

    service = module.get<ShoppingItemsService>(ShoppingItemsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return all shopping items', () => {
    const shoppingItems = service.findShoppingItemsByUserId(1);
    expect(shoppingItems.length).toEqual(0);
  });

  it('should add a shopping item', () => {
    const shoppingItem = service.addShoppingItem(1, {
      id: 1,
      name: 'Test Item',
    });
    expect(shoppingItem).toEqual({ id: 1, name: 'Test Item' });
  });

  it('should delete a shopping item', () => {
    const addedShoppingItem = service.addShoppingItem(1, {
      id: 1,
      name: 'Test Item',
    });
    const shoppingItem = service.deleteShoppingItem(1, 1);
    expect(shoppingItem).toEqual({ id: 1, name: 'Test Item' });
  });
});
