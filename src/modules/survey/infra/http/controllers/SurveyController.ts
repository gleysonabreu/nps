import { Request, Response } from 'express';
import { container } from 'tsyringe';
import CreateSurveyService from '../../../services/CreateSurveyService';
import FindAllSurveysService from '../../../services/FindAllSurveysService';

class SurveyController {
  async create(request: Request, response: Response) {
    const { title, description } = request.body;

    const createSurveyService = container.resolve(CreateSurveyService);
    const survey = await createSurveyService.execute({ title, description });

    return response.status(201).json(survey);
  }

  async show(request: Request, response: Response) {
    const findAllSurveysService = container.resolve(FindAllSurveysService);
    const surveys = await findAllSurveysService.execute();

    return response.json(surveys);
  }
}

export default SurveyController;
