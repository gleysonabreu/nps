import { inject, injectable } from 'tsyringe';
import Survey from '../infra/typeorm/entities/Survey';
import ISurveyRepository from '../repositories/ISurveyRepository';

@injectable()
class FindAllSurveysService {
  constructor(
    @inject('SurveyRepository')
    private surveyRepository: ISurveyRepository,
  ) {}

  async execute(): Promise<Survey[]> {
    const surveys = await this.surveyRepository.show();
    return surveys;
  }
}

export default FindAllSurveysService;
