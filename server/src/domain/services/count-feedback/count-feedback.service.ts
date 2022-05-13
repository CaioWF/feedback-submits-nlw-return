import { IFeedbacksRepository } from "../../../infra/repositories/feedbacks.repository";

export class CountFeedbackService {
  constructor(private feedbacksRepository: IFeedbacksRepository) {}

  async execute(): Promise<number> {
    return this.feedbacksRepository.count();
  }
}