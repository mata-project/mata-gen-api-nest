import { Args, Query, Resolver } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { User } from '../graphql.schema';

@Resolver('User')
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Query('user')
  async findOneByEmail(
    // possibilites
    // @Root() root: any,
    // @Context() context: any,
    // @Info() info: any,
    @Args('email')
    email: string,
    @Args('password')
    password: string,
  ): Promise<User> {
    return this.usersService.findOneByEmail(email, password);
  }
}
