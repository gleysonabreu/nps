import request from 'supertest';
import { Connection } from 'typeorm';
import app from '../shared/infra/http/app';
import createConnection from '../shared/infra/typeorm';

let connection: Connection;
describe('Surveys', () => {
  beforeAll(async () => {
    connection = await createConnection();
    await connection.runMigrations();
  });

  afterAll(async () => {
    await connection.close();
  });

  it('should be able to create a new survey', async () => {
    const response = await request(app).post('/surveys').send({
      title: 'Example',
      description: 'Description example',
    });

    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty('id');
  });

  it('should be able to get all surveys', async () => {
    await request(app).post('/surveys').send({
      title: 'Example2',
      description: 'Description example2',
    });

    const response = await request(app).get('/surveys');
    expect(response.body.length).toBe(2);
  });
});
