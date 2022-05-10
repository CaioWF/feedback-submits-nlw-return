import { IFeedbackEntity } from "../../domain/entities/feedback.entity";

export interface ICreateFeedback {
  type: string;
  comment: string;
  screenshot?: string;
}

export interface IFeedbacksRepository {
  create(data: ICreateFeedback): Promise<IFeedbackEntity>;
}