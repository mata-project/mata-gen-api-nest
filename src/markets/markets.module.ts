import { Module } from '@nestjs/common';
import { MarketsResolver } from './markets.resolver';
import { MarketsService } from './markets.service';
import { LoggingPlugin } from '../common/plugins/logging.plugin';

@Module({
  imports: [],
  // FIXME fix the repeating logs
  providers: [MarketsService, MarketsResolver, LoggingPlugin],
})
export class MarketsModule {}
