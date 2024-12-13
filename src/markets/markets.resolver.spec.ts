import { Test, TestingModule } from '@nestjs/testing';
import { MarketsResolver } from './markets.resolver';
import { MarketsService } from './markets.service';
import { Market } from '../graphql.schema';

describe('MarketsResolver', () => {
  let resolver: MarketsResolver;
  const market: Market = {
    id: 1,
    name: 'Aldi',
  };

  beforeEach(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      providers: [
        MarketsResolver,
        {
          provide: MarketsService,
          useValue: {
            findAll: jest.fn().mockReturnValue([market]),
            findOneById: jest
              .fn()
              .mockImplementation((id: number) => ({ ...market, id })),
          },
        },
      ],
    }).compile();

    resolver = moduleRef.get<MarketsResolver>(MarketsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });

  it('should return all markets', async () => {
    const markets = await resolver.getMarkets();
    expect(markets.length).toEqual(1);
    expect(markets[0].name).toEqual(market.name);
  });

  it('should return a market by id', async () => {
    const result = await resolver.findOneById(1);
    expect(result).toEqual({ ...market, id: 1 });
  });
});
