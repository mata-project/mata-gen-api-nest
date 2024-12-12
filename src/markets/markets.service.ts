import { Injectable } from '@nestjs/common';
import { Market } from '../graphql.schema';

@Injectable()
export class MarketsService {
  private readonly markets: Array<Market> = [
    { id: 1, name: 'Aldi' },
    { id: 2, name: 'Lidl' },
    { id: 3, name: 'AH' },
    { id: 4, name: 'Action' },
    { id: 5, name: 'Ethnic' },
    { id: 6, name: 'Carrefour' },
  ];

  findAll(): Market[] {
    return this.markets;
  }

  findOneById(id: number): Market {
    return this.markets.find((market) => market.id === id);
  }
}
