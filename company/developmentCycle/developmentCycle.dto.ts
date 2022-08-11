import { ApiProperty } from '@nestjs/swagger';

export class DevelopmentCycleDTO {
    @ApiProperty({ description: 'Development Cycle Id' })
    developmentCycleId: string;

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

    @ApiProperty({
        description: 'Is this development cycle active',
    })
    isActive: boolean;
}

export interface IDevelopmentCycleDTO extends DevelopmentCycleDTO {}