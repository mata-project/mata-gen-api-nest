import { Test, TestingModule } from '@nestjs/testing';
import { MarketsService } from './markets.service';

describe('MarketsService', () => {
  let service: MarketsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MarketsService],
    }).compile();

    service = module.get<MarketsService>(MarketsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return all markets', () => {
    const markets = service.findAll();
    expect(markets.length).toEqual(6);
    expect(markets[0].name).toEqual('Aldi');
    expect(markets[1].name).toEqual('Lidl');
    expect(markets[2].name).toEqual('AH');
    expect(markets[3].name).toEqual('Action');
    expect(markets[4].name).toEqual('Ethnic');
    expect(markets[5].name).toEqual('Carrefour');
  });

  it('should return a market by id', () => {
    const market = service.findOneById(1);
    expect(market).toEqual({ id: 1, name: 'Aldi' });
  });

  it('should return undefined if market not found', () => {
    const market = service.findOneById(99);
    expect(market).toBeUndefined();
  });
});
