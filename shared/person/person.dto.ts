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
}

export interface IPersonDTO extends PersonDTO {}
