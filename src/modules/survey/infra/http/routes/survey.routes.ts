import { Router } from 'express';
import SurveyController from '../controllers/SurveyController';

const surveyRoutes = Router();
const surveyController = new SurveyController();

surveyRoutes.post('/', surveyController.create);
surveyRoutes.get('/', surveyController.show);

export default surveyRoutes;
