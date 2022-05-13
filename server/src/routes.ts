import { Router } from 'express';
import { CountFeedbackController } from './presentation/controllers/count-feedback.controller';
import { SubmitFeedbackController } from './presentation/controllers/submit-feedback.controller';

const routes = Router();

const submitFeedbackController = new SubmitFeedbackController();
const countFeedbackController = new CountFeedbackController();

routes.post('/feedbacks', submitFeedbackController.handle);
routes.get('/feedbacks/count', countFeedbackController.handle);

routes.get('/health', async (req, res) => {
  return res.status(200)
})

export { routes };
