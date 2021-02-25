import SurveyUser from '../infra/typeorm/entities/SurveyUser';
import ICreateSurveyUserDTO from '../dtos/ICreateSurveyUserDTO';

export default interface ISurveyUserRepository {
  create(surveyUser: ICreateSurveyUserDTO): Promise<SurveyUser>;
  findOne(
    userId: string,
    value: string | null,
  ): Promise<SurveyUser | undefined>;
}
