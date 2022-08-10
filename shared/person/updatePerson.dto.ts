import { ApiProperty } from '@nestjs/swagger';

export class UpdatePersonDTO {
    @ApiProperty({ description: 'Full Name of the person' })
    name: string;
}

export interface IUpdatePersonDTO extends UpdatePersonDTO {}
