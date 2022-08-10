import { ApiProperty } from '@nestjs/swagger';

export class CreatePersonDTO {
    @ApiProperty({ description: 'Full Name of the person' })
    name: string;
}

export interface ICreatePersonDTO extends CreatePersonDTO {}
