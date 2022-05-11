export interface ISendMailData {
  to: string;
  from: string;
  subject: string;
  body: string;
  attachments?: ISendMailDataAttachment[]
}

export interface ISendMailDataAttachment {
  filename: string;
  content: Buffer | string;
}

export interface IMailProvider {
  sendMail(mailData: ISendMailData): Promise<void>;
}