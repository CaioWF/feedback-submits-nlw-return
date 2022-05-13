import { Feedback } from "@prisma/client";
import { IFeedbackEntity } from "../../../domain/entities/feedback.entity";
import { prisma } from "../../../prisma";
import { ICreateFeedback, IFeedbacksRepository } from "../feedbacks.repository";
import { IToEntity } from "../to-entity.repository";

export class PrismaFeedbacksRepository implements IFeedbacksRepository, IToEntity<Feedback, IFeedbackEntity> {
  async create({ type, comment, screenshot }: ICreateFeedback): Promise<IFeedbackEntity> {
    const feedback = await prisma.feedback.create({
      data: {
        type,
        comment,
        screenshot,
      },
    });

    return this.toEntity(feedback);
  }

  count(): Promise<number> {
    return prisma.feedback.count();
  }

  toEntity(data: Feedback): IFeedbackEntity {
    return {
      id: data.id,
      type: data.type,
      comment: data.comment,
      screenshot: data.screenshot,
    }
  }
}