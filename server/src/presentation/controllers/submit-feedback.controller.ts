import { Request, Response } from "express";
import { FeedbackCountEvent } from "../../domain/events/feedback-count.event";
import { CountFeedbackService } from "../../domain/services/count-feedback/count-feedback.service";
import { SubmitFeedbackService } from "../../domain/services/submit-feedback/submit-feedback.service";
import { PrismaFeedbacksRepository } from "../../infra/repositories/prisma/prisma-feedbacks.repository";
import { NodemailerMailProvider } from "../../shared/providers/MailProvider/nodemailer/nodemailer-mail.provider";

export class SubmitFeedbackController {
  async handle(req: Request, res: Response) {
    const { type, comment, screenshot } = req.body;

    const feedbacksRepository = new PrismaFeedbacksRepository();
    const mailProvider = new NodemailerMailProvider();

    const submitFeedbackService = new SubmitFeedbackService(feedbacksRepository, mailProvider);
    const countFeedbackService = new CountFeedbackService(feedbacksRepository);
    const feedbackCountEvent = new FeedbackCountEvent();

    const feedback = await submitFeedbackService.execute({ type, comment, screenshot });

    const feedbackCount = await countFeedbackService.execute();

    feedbackCountEvent.emit(feedbackCount);

    return res.status(201).json(feedback);
  }
}