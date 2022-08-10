import { ApiProperty } from '@nestjs/swagger';

export class SendEmailDTO {
    from: string;
    to: string[];
    body: string;
    subject: string;
}

export interface ISendEmailDTO extends SendEmailDTO {}
