import { ApiProperty } from '@nestjs/swagger';

export class PersonDTO {
    @ApiProperty({ description: 'Person Id' })
    personId: string;

    @ApiProperty({ description: 'Full Name of the person' })
    name: string;

    @ApiProperty({
        description: 'Is this person active',
    })
    isActive: boolean;

    @ApiProperty({
        description: 'When this record goes into effect',
        format: 'yyyy-MM-dd',
    })
    effectiveDate: string;

    @ApiProperty({
        description: 'Effective dated records',
        isArray: true,
        required: false,
    })
    effectiveDatedRecords: PersonDTO[];
}

export interface IPersonDTO extends PersonDTO {}
