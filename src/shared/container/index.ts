import { container } from 'tsyringe';

import IUserRepository from '../../modules/user/repositories/IUserRepository';
import UserRepository from '../../modules/user/infra/typeorm/repositories/UserRepository';

import ISurveyRepository from '../../modules/survey/repositories/ISurveyRepository';
import SurveyRepository from '../../modules/survey/infra/typeorm/repositories/SurveyRepository';

container.registerSingleton<IUserRepository>('UserRepository', UserRepository);
container.registerSingleton<ISurveyRepository>(
  'SurveyRepository',
  SurveyRepository,
);
