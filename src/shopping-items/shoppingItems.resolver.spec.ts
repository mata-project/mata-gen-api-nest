import { Test, TestingModule } from '@nestjs/testing';
import { ShoppingItemsResolver } from './shoppingItems.resolver';
import { ShoppingItemsService } from './shoppingItems.service';
import { ShoppingItem } from '../graphql.schema';

describe('ShoppingItemsResolver', () => {
  let resolver: ShoppingItemsResolver;
  const shoppingItem: ShoppingItem = {
    id: 1,
    name: 'Test Item',
  };

  beforeEach(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      providers: [
        ShoppingItemsResolver,
        {
          provide: ShoppingItemsService,
          useValue: {
            findShoppingItemsByUserId: jest
              .fn()
              .mockReturnValue([shoppingItem]),
            addShoppingItem: jest
              .fn()
              .mockImplementation((userId, item) => ({ ...item, id: 1 })),
            deleteShoppingItem: jest
              .fn()
              .mockImplementation((userId, id) => ({ ...shoppingItem, id })),
          },
        },
      ],
    }).compile();

    resolver = moduleRef.get<ShoppingItemsResolver>(ShoppingItemsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });

  it('should return all shopping items', async () => {
    const shoppingItems = await resolver.getShoppingItems(1);
    expect(shoppingItems.length).toEqual(1);
    expect(shoppingItems[0].name).toEqual(shoppingItem.name);
  });

  it('should add a shopping item', async () => {
    const result = await resolver.addShoppingItem(1, 'Test Item');
    expect(result).toEqual({ ...shoppingItem, id: 1 });
  });

  it('should delete a shopping item', async () => {
    const result = await resolver.deleteShoppingItem(1, 1);
    expect(result).toEqual({ ...shoppingItem, id: 1 });
  });
});
