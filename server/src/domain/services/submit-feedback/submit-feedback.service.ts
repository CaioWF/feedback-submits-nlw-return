import { IFeedbacksRepository } from "../../../infra/repositories/feedbacks.repository";
import { IMailProvider } from "../../../shared/providers/MailProvider/mail.provider";
import { IFeedbackEntity } from "../../entities/feedback.entity";

interface SubmitFeedbackServiceRequest {
  type: string;
  comment: string;
  screenshot?: string;
}

export class SubmitFeedbackService {
  constructor(private feedbacksRepository: IFeedbacksRepository, private mailProvider: IMailProvider) {}

  async execute({ type, comment, screenshot }: SubmitFeedbackServiceRequest): Promise<IFeedbackEntity> {
    if(!type) throw new Error('Type is required');

    if(!comment) throw new Error('Comment is required');
    
    if(screenshot && !screenshot.startsWith('data:image/png;base64')) throw new Error('Invalid screenshot format');

    const feedback = await this.feedbacksRepository.create({ type, comment, screenshot });

    await this.mailProvider.sendMail({
      from: "Equipe Feedget <oi@feedget.com>",
      to: "Caio Weliton <contato.caioweliton@gmail.com>",
      subject: "Novo feedback",
      body: [
        `<div style="font-family: sans-serif; font-size: 16px; color: #111;">`,
        `<p>Tipo do feedback: ${type}</p>`,
        `<p>Comentário: ${comment}</p>`,
        `</div>`
      ].join('\n'),
      attachments: [
        {
          filename: 'screenshot.png',
          content: screenshot ? Buffer.from(screenshot.split("base64,")[1], "base64") : ''
        }
      ]
    });

    return feedback;
  }
}