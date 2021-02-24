import { inject, injectable } from 'tsyringe';
import ISurveyRepository from '../repositories/ISurveyRepository';

interface IRequest {
  title: string;
  description: string;
}

@injectable()
class CreateSurveyService {
  constructor(
    @inject('SurveyRepository')
    private surveyRepository: ISurveyRepository,
  ) {}

  async execute({ title, description }: IRequest) {
    const survey = await this.surveyRepository.create({ title, description });
    return survey;
  }
}

export default CreateSurveyService;
