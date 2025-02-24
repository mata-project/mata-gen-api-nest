import { Injectable, OnModuleInit } from '@nestjs/common';
import { Pool } from 'pg';

@Injectable()
export class DatabaseService implements OnModuleInit {
  private pool: Pool;

  constructor() {
    this.pool = new Pool({
      host: process.env.DATABASE_HOST,
      port: 5432,
      user: process.env.DATABASE_USERNAME,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
      //ssl: false, // 👈 Disable SSL
      ssl: {
        rejectUnauthorized: false, // Use proper SSL certificate in production
      },
    });

    this.pool.on('connect', () => {
      //console.log('Database connected successfully');
    });

    this.pool.on('error', (err) => {
      console.error('Database connection error:', err.message);
    });
  }

  async onModuleInit() {
    try {
      await this.pool.connect();
    } catch (err) {
      console.error('Unable to connect to the database:', err.message);
    }
  }

  async query(query: string, params: any[] = []) {
    return this.pool.query(query, params);
  }
}
