import { ApiProperty } from '@nestjs/swagger';

export class UpdateCompanyDTO {
    @ApiProperty({ description: 'Name of the company' })
    name: string;
}

export interface IUpdateCompanyDTO extends UpdateCompanyDTO {}
