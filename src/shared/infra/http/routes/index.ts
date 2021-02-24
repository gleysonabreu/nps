import { Router } from 'express';
import userRoutes from '../../../../modules/user/infra/http/routes/user.routes';
import surveyRoutes from '../../../../modules/survey/infra/http/routes/survey.routes';

const routes = Router();

routes.use('/users', userRoutes);
routes.use('/surveys', surveyRoutes);

export default routes;
