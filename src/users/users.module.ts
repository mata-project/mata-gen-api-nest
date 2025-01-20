import { Module } from '@nestjs/common';
import { DatabaseService } from '../db';
import { UsersService } from './users.service';
import { UsersResolver } from './users.resolver';

@Module({
  imports: [],
  providers: [UsersService, UsersResolver, DatabaseService],
})
export class UsersModule {}
