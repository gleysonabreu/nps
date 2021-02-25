import { getRepository, Repository } from 'typeorm';
import SurveyUser from '../entities/SurveyUser';
import ISurveyUserRepository from '../../../repositories/ISurveyUserRepository';
import ICreateSurveyUserDTO from '../../../dtos/ICreateSurveyUserDTO';

class SurveyUserRepository implements ISurveyUserRepository {
  private ormRepository: Repository<SurveyUser>;

  constructor() {
    this.ormRepository = getRepository(SurveyUser);
  }

  async create(surveyUser: ICreateSurveyUserDTO): Promise<SurveyUser> {
    const createSurveyUser = this.ormRepository.create(surveyUser);
    await this.ormRepository.save(createSurveyUser);
    return createSurveyUser;
  }

  async findOne(
    userId: string,
    value: string | null,
  ): Promise<SurveyUser | undefined> {
    const surveyUser = await this.ormRepository.findOne({
      where: [{ userId }, { value }],
    });

    return surveyUser;
  }
}

export default SurveyUserRepository;
