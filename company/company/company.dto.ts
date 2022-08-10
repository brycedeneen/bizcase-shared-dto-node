import { ApiProperty } from '@nestjs/swagger';

export class CompanyDTO {
    @ApiProperty({ description: 'Company Id' })
    companyId: string;

    @ApiProperty({ description: 'Name of the company' })
    name: string;

    @ApiProperty({
        description: 'Is this Company active',
    })
    isActive: boolean;
}

export interface ICompanyDTO extends CompanyDTO {}
