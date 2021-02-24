import { ConnectionOptions } from 'typeorm';
import dotenv from 'dotenv';

dotenv.config({
  path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env',
});

const ormConfig: ConnectionOptions = {
  type: 'postgres',
  host: process.env.TYPEORM_HOST,
  port: Number(process.env.TYPEORM_PORT),
  username: process.env.TYPEORM_USERNAME,
  password: process.env.TYPEORM_PASSWORD,
  database: process.env.TYPEORM_DATABASE,
  dropSchema: process.env.TYPEORM_DROPSCHEMA === 'true',
  entities: [String(process.env.TYPEORM_ENTITIES)],
  migrations: [String(process.env.TYPEORM_MIGRATIONS)],

  cli: {
    migrationsDir: process.env.TYPEORM_MIGRATIONS_DIR,
  },
};

export default ormConfig;
