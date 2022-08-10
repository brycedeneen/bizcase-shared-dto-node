import { ApiProperty } from '@nestjs/swagger';

export class AuditDTO {
    @ApiProperty({
        description: 'The user who created this record.',
    })
    createdBy: string;

    @ApiProperty({
        description: 'The user id of the user who created this record.',
    })
    createdByUserId: string;

    @ApiProperty({
        description: 'The user who created this record.',
    })
    createdOn: string;

    @ApiProperty({
        description: 'The user who created this record.',
    })
    updatedOn: string;
}

export interface IAuditDTO extends AuditDTO {}
