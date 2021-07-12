import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import * as dotenv from 'dotenv';
import { Inquiry } from './src/entities/Inquiry';

dotenv.config();
const config: TypeOrmModuleOptions = {
  type: process.env.DB_ENGINE as any,
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  entities: [Inquiry],
  migrations: [__dirname + '/src/migrations/*.ts'],
  cli: { migrationsDir: 'src/migrations' },
  synchronize: true,
  logging: true,
  keepConnectionAlive: true,
};

export = config;
