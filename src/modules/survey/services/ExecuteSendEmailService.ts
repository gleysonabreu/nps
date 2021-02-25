import { inject, injectable } from 'tsyringe';
import { resolve } from 'path';
import ISurveyRepository from '../repositories/ISurveyRepository';
import IUserRepository from '../../user/repositories/IUserRepository';
import SurveyUserRepository from '../infra/typeorm/repositories/SurveyUserRepository';
import AppError from '../../../shared/errors/AppError';
import SendEmailService from '../../../shared/services/SendEmailService';

interface IRequest {
  email: string;
  surveyId: string;
}

@injectable()
class ExecuteSendEmailService {
  constructor(
    @inject('SurveyRepository')
    private surveyRepository: ISurveyRepository,
    @inject('UserRepository')
    private userRepository: IUserRepository,
    @inject('SurveyUserRepository')
    private surveyUserRepository: SurveyUserRepository,
  ) {}

  async execute({ email, surveyId }: IRequest) {
    const path = resolve(
      __dirname,
      '..',
      '..',
      '..',
      'shared',
      'views',
      'emails',
      'npsMail.hbs',
    );
    const user = await this.userRepository.findByEmail(email);
    if (!user) throw new AppError('User does not exists.');

    const survey = await this.surveyRepository.findOne(surveyId);
    if (!survey) throw new AppError('Survey does not exists.');

    const variables = {
      name: user.name,
      title: survey.title,
      description: survey.description,
      userId: user.id,
      link: process.env.NPS_MAIL_URL,
    };

    const surveyUserAlreadyExists = await this.surveyUserRepository.findOne(
      user.id,
      null,
    );

    if (surveyUserAlreadyExists) {
      await SendEmailService.execute({
        to: email,
        subject: survey.title,
        variables,
        path,
      });

      return surveyUserAlreadyExists;
    }

    const surveyUser = await this.surveyUserRepository.create({
      userId: user.id,
      surveyId,
    });

    await SendEmailService.execute({
      to: email,
      subject: survey.title,
      variables,
      path,
    });

    return surveyUser;
  }
}

export default ExecuteSendEmailService;
