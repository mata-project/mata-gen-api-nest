import { Injectable } from '@nestjs/common';
import { Market } from '../graphql.schema';
import { DatabaseService } from '../db';

@Injectable()
export class MarketsService {
  constructor(private databaseService: DatabaseService) {}

  private readonly markets: Array<Market> = [
    { id: 1, name: 'Aldi' },
    { id: 2, name: 'Lidl' },
    { id: 3, name: 'AH' },
    { id: 4, name: 'Action' },
    { id: 5, name: 'Ethnic' },
    { id: 6, name: 'Carrefour' },
  ];

  async findAll(): Promise<Market[]> {
    const fromDb = await this.databaseService.query('select * from markets');
    const result = fromDb.rows;
    return result;
  }

  findOneById(id: number): Market {
    return this.markets.find((market) => market.id === id);
  }
}
