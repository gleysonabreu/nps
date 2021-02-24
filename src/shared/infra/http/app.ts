import 'reflect-metadata';
import 'express-async-errors';
import '../../container';
import express from 'express';
import connection from '../typeorm';
import routes from './routes';
import AppHandleError from '../../errors/AppHandleError';

connection();
const app = express();
app.use(express.json());
app.use(routes);
app.use(AppHandleError);

export default app;
