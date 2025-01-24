import { Injectable } from '@nestjs/common';
import { Market } from '../graphql.schema';
import { DatabaseService } from '../db';

@Injectable()
export class MarketsService {
  constructor(private databaseService: DatabaseService) {}

  async findAll(): Promise<Market[]> {
    return (await this.databaseService.query('select * from markets')).rows;
  }

  async findOneById(id: number): Promise<Market> {
    return (
      await this.databaseService.query(`SELECT * FROM markets WHERE id = ${id}`)
    ).rows[0];
  }
}
