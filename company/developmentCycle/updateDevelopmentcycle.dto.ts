import { ApiProperty } from '@nestjs/swagger';

export class UpdateDevelopmentCycleDTO {
    @ApiProperty({
        description: 'Name of the development cycle',
        example: '2021 Fiscal or 1/1/2030 to 12/31/2031',
    })
    name: string;

    @ApiProperty({
        description: 'Start date of the development cycle',
        format: 'yyyy-MM-dd',
        example: '2030-01-01',
    })
    startDate: string;

    @ApiProperty({
        description: 'End date of the development cycle',
        format: 'yyyy-MM-dd',
        example: '2030-12-31',
    })
    endDate: string;
}

export interface IUpdateDevelopmentCycleDTO extends UpdateDevelopmentCycleDTO {}
