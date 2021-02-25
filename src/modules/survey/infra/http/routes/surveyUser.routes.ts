import { Router } from 'express';
import SendMailController from '../controllers/SendMailController';

const surveyUserRoutes = Router();
const sendMailController = new SendMailController();

surveyUserRoutes.post('/', sendMailController.execute);

export default surveyUserRoutes;
