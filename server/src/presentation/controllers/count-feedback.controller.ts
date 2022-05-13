import { Request, Response } from "express";
import { CountFeedbackService } from "../../domain/services/count-feedback/count-feedback.service";
import { PrismaFeedbacksRepository } from "../../infra/repositories/prisma/prisma-feedbacks.repository";

export class CountFeedbackController {
  async handle(req: Request, res: Response) {
    const feedbacksRepository = new PrismaFeedbacksRepository();

    const countFeedbackService = new CountFeedbackService(feedbacksRepository);

    const count = await countFeedbackService.execute();

    return res.status(201).json({ count });
  }
}