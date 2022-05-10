export interface ISendMailData {
  to: string;
  from: string;
  subject: string;
  body: string;
}

export interface IMailProvider {
  sendMail(mailData: ISendMailData): Promise<void>;
}