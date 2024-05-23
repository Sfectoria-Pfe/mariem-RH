import { Injectable } from '@nestjs/common';

import { MailerService } from '@nestjs-modules/mailer';
@Injectable()
export class MailService {
  constructor(private readonly mailerService: MailerService) {}

  async mailAcceptedDemande(email: string) {
    const result = await this.mailerService.sendMail({
      to: email,
      from: 'raniaelouni421@gmail.com',
      subject: 'Your Application Has Been Accepted ✔',
      text: 'Dear Candidate, congratulations on moving forward!',
      html: `
        <h1>Welcome to Our Team!</h1>
        <p>Dear Candidate,</p>
        <p>We are pleased to inform you that your application has been accepted. Congratulations on making it to the next stage of our selection process!</p>
        <p>We will be contacting you shortly to schedule an interview. Please ensure that your contact information is up-to-date and feel free to reach out to us if you have any questions.</p>
        <p>Thank you for your interest in joining our team. We look forward to speaking with you soon.</p>
        <p>Best regards,</p>
        <p>The Recruitment Team</p>
      `,
    });
    return result;
  }
}
