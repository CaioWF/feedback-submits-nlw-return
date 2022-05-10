import { SubmitFeedbackService } from "./submit-feedback.service";

const createFeedbackSpy = jest.fn()
const sendMailSpy = jest.fn()

const submitFeedbackService = new SubmitFeedbackService(
  { create: createFeedbackSpy },
  { sendMail: sendMailSpy }
);

describe('Submit feedback', () => {
  it('should be able to submit feedback', async () => {
    await expect(submitFeedbackService.execute({
      type: 'BUG',
      comment: 'This is a bug',
      screenshot: 'data:image/png;base64,adefAWSDAwdAWDADSfada@DE@322d2',
    })).resolves.not.toThrow();

    expect(createFeedbackSpy).toHaveBeenCalled();
    expect(sendMailSpy).toHaveBeenCalled();
  })
  
  it('should not be able to submit feedback without type', async () => {
    await expect(submitFeedbackService.execute({
      type: '',
      comment: 'This is a bug',
      screenshot: 'data:image/png;base64,adefAWSDAwdAWDADSfada@DE@322d2',
    })).rejects.toThrow();
  })
  
  it('should not be able to submit feedback without comment', async () => {
    await expect(submitFeedbackService.execute({
      type: 'BUG',
      comment: '',
      screenshot: 'data:image/png;base64,adefAWSDAwdAWDADSfada@DE@322d2',
    })).rejects.toThrow();
  })
  
  it('should not be able to submit feedback without comment', async () => {
    await expect(submitFeedbackService.execute({
      type: 'BUG',
      comment: 'This is a bug',
      screenshot: 'invalid-screenshot',
    })).rejects.toThrow();
  })
})