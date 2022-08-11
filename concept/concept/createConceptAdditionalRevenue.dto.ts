import { ApiProperty } from '@nestjs/swagger';

export class CreateConceptAdditionalRevenueDTO {
    @ApiProperty({ description: 'Name or title of the additional revenue', example: 'White label licensing fees' })
    name: string;

    @ApiProperty({ description: 'The total estimated additional revenue for year  1', example: 1000000 })
    additionalRevenueY1: number;

    @ApiProperty({ description: 'The total estimated additional revenue for year  2', example: 2000000 })
    additionalRevenueY2: number;

    @ApiProperty({ description: 'The total estimated additional revenue for year  3', example: 4000000 })
    additionalRevenueY3: number;
}

export interface ICreateConceptAdditionalRevenueDTO extends CreateConceptAdditionalRevenueDTO { }
