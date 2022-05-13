import { CountFeedbackService } from "./count-feedback.service";

const countFeedbackSpy = jest.fn()

const countFeedbackService = new CountFeedbackService(
  { create: jest.fn(), count: countFeedbackSpy }
);

describe('Count feedback', () => {
  it('should be able to count feedbacks', async () => {
    await expect(countFeedbackService.execute()).resolves.not.toThrow();

    expect(countFeedbackSpy).toHaveBeenCalled();
  })
})