import { getRepository, Repository } from 'typeorm';
import ICreateSurveyDTO from '../../../dtos/ICreateSurveyDTO';
import ISurveyRepository from '../../../repositories/ISurveyRepository';
import Survey from '../entities/Survey';

class SurveyRepository implements ISurveyRepository {
  private ormRepository: Repository<Survey>;

  constructor() {
    this.ormRepository = getRepository(Survey);
  }

  async create(survey: ICreateSurveyDTO): Promise<Survey> {
    const createSurvey = this.ormRepository.create(survey);
    await this.ormRepository.save(createSurvey);

    return createSurvey;
  }

  async show(): Promise<Survey[]> {
    const surveys = await this.ormRepository.find();
    return surveys;
  }
}

export default SurveyRepository;
