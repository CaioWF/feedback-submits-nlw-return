import express from 'express';
import { SubmitFeedbackService } from './domain/services/submit-feedback.service';
import { PrismaFeedbacksRepository } from './infra/repositories/prisma/prisma-feedbacks.repository';
import { NodemailerMailProvider } from './shared/providers/MailProvider/nodemailer/nodemailer-mail.provider';

export const routes = express.Router();

routes.get('/health', async (req, res) => {
  return res.send('ok')
})

routes.post('/feedbacks', async (req, res) => {
  const { type, comment, screenshot } = req.body;

  const feedbacksRepository = new PrismaFeedbacksRepository();
  const mailProvider = new NodemailerMailProvider();
  const submitFeedbackService = new SubmitFeedbackService(feedbacksRepository, mailProvider);

  const feedback = await submitFeedbackService.execute({ type, comment, screenshot });

  res.status(201).json(feedback);
})