import ICreateSurveyDTO from '../dtos/ICreateSurveyDTO';
import Survey from '../infra/typeorm/entities/Survey';

export default interface ISurveyRepository {
  create(survey: ICreateSurveyDTO): Promise<Survey>;
  show(): Promise<Survey[]>;
}
