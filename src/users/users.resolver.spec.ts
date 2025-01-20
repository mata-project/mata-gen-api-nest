import { Test, TestingModule } from '@nestjs/testing';
import { UsersResolver } from './users.resolver';
import { UsersService } from './users.service';
import { User } from '../graphql.schema';

describe('UsersResolver', () => {
  let resolver: UsersResolver;
  const user: User = {
    id: 1,
    name: 'John Doe',
    isUser: true,
  };

  beforeEach(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      providers: [
        UsersResolver,
        {
          provide: UsersService,
          useValue: {
            findOneByEmail: jest
              .fn()
              .mockImplementation((email: string, password: string) => ({
                ...user,
                email,
                password,
              })),
          },
        },
      ],
    }).compile();

    resolver = moduleRef.get<UsersResolver>(UsersResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });

  it('should return a user by email and password', async () => {
    const result = await resolver.findOneByEmail(
      'john.doe@example.com',
      'password',
    );
    expect(result).toEqual({
      ...user,
      email: 'john.doe@example.com',
      password: 'password',
    });
  });
});
