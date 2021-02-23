import { createConnection, Connection } from 'typeorm';
import { ormConfig } from '../../../config/index';

export default async (name: string = 'default'): Promise<Connection> => {
  return createConnection(
    Object.assign(
      ormConfig,
      { name },
    ),
  );
}