import nodemailer from "nodemailer";
import { IMailProvider, ISendMailData } from "../mail.provider";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "f8ef8401788c83",
    pass: "f5f297b484555b"
  }
});

export class NodemailerMailProvider implements IMailProvider {
  async sendMail({ from, to, subject, body }: ISendMailData): Promise<void> {
    await transport.sendMail({
      from,
      to,
      subject,
      html: body
    });
  }
}