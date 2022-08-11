import { ApiProperty } from '@nestjs/swagger';

export class UpdateConceptIncrementalRevenueDTO {
    @ApiProperty({ description: 'Name or title of the additional revenue', example: 'White label licensing fees' })
    name: string;

    @ApiProperty({ description: 'The total estimated additional revenue for year  1', example: 1000000 })
    IncrementalRevenueY1: number;

    @ApiProperty({ description: 'The total estimated additional revenue for year  2', example: 2000000 })
    IncrementalRevenueY2: number;

    @ApiProperty({ description: 'The total estimated additional revenue for year  3', example: 4000000 })
    IncrementalRevenueY3: number;
}

export interface IUpdateConceptIncrementalRevenueDTO extends UpdateConceptIncrementalRevenueDTO { }
