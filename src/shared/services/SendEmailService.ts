import nodemailer, { Transporter } from 'nodemailer';
import fs from 'fs';
import handlebars from 'handlebars';

interface Mail {
  to: string;
  subject: string;
  variables: object;
  path: string;
}

class SendEmailService {
  private client: Transporter;

  constructor() {
    nodemailer.createTestAccount().then(account => {
      const transporter = nodemailer.createTransport({
        host: account.smtp.host,
        port: account.smtp.port,
        secure: account.smtp.secure,
        auth: {
          user: account.user,
          pass: account.pass,
        },
      });

      this.client = transporter;
    });
  }

  async execute({ variables, subject, to, path }: Mail) {
    const templateFileContent = fs.readFileSync(path).toString('utf-8');
    const mailTemplateParse = handlebars.compile(templateFileContent);
    const html = mailTemplateParse(variables);

    await this.client.sendMail({
      to,
      subject,
      html,
      from: 'NPS <noreply@nps.com.br>',
    });
  }
}

export default new SendEmailService();
