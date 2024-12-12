import { Module } from '@nestjs/common';
import { MarketsResolver } from './markets.resolver';
import { MarketsService } from './markets.service';

@Module({
  imports: [],
  providers: [MarketsService, MarketsResolver],
})
export class MarketsModule {}
