import { container } from 'tsyringe';

import IUserRepository from '../../modules/user/repositories/IUserRepository';
import UserRepository from '../../modules/user/infra/typeorm/repositories/UserRepository';

import ISurveyRepository from '../../modules/survey/repositories/ISurveyRepository';
import SurveyRepository from '../../modules/survey/infra/typeorm/repositories/SurveyRepository';

import ISurveyUserRepository from '../../modules/survey/repositories/ISurveyUserRepository';
import SurveyUserRepository from '../../modules/survey/infra/typeorm/repositories/SurveyUserRepository';

container.registerSingleton<IUserRepository>('UserRepository', UserRepository);
container.registerSingleton<ISurveyRepository>(
  'SurveyRepository',
  SurveyRepository,
);
container.registerSingleton<ISurveyUserRepository>(
  'SurveyUserRepository',
  SurveyUserRepository,
);
