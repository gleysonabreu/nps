import { Request, Response } from 'express';
import { container } from 'tsyringe';
import ExecuteSendEmailService from '../../../services/ExecuteSendEmailService';

class SendMailController {
  async execute(request: Request, response: Response) {
    const { email, survey_id: surveyId } = request.body;

    const executeSendEmailService = container.resolve(ExecuteSendEmailService);
    const sendEmail = await executeSendEmailService.execute({
      email,
      surveyId,
    });

    return response.json(sendEmail);
  }
}

export default SendMailController;
