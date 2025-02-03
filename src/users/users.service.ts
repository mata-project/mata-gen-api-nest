import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../db';
import { User } from '../graphql.schema';

@Injectable()
export class UsersService {
  constructor(private databaseService: DatabaseService) {}

  async findOneByEmail(email: string, password: string): Promise<User> {
    const result = (
      await this.databaseService.query(
        `SELECT id, name, password, email, password FROM users WHERE email = '${email}'`,
      )
    ).rows[0];
    if (password === result?.password) {
      return {
        id: result.id,
        name: result.name,
        isUser: true,
        email: result.email,
        password: result.password,
      };
    }
    return {
      isUser: false,
    };
  }
}
