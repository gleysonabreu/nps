import request from 'supertest';
import { Connection } from 'typeorm';
import app from '../shared/infra/http/app';
import createConnection from '../shared/infra/typeorm';

let connection: Connection;
describe('Users', () => {
  beforeAll(async () => {
    connection = await createConnection();
    await connection.runMigrations();
  });

  afterAll(async () => {
    await connection.close();
  });

  it('should be able to create a new user', async () => {
    const response = await request(app).post('/users').send({
      name: 'Gleygley',
      email: 'gley@hotmail.com',
    });

    expect(response.status).toBe(201);
  });

  it('should not be able to create a user with exists email', async () => {
    const response = await request(app).post('/users').send({
      name: 'Gleygley',
      email: 'gley@hotmail.com',
    });

    expect(response.status).toBe(400);
  });
});
