import { ApiProperty } from '@nestjs/swagger';

export class ConceptIncrementalRevenueDTO {
    @ApiProperty({ description: 'Segment Additional Revenue Id' })
    conceptIncrementalRevenueId: string;

    @ApiProperty({ description: 'Name or title of the additional revenue', example: 'White label licensing fees' })
    name: string;

    @ApiProperty({ description: 'The total estimated additional revenue for year  1', example: 1000000 })
    incrementalRevenueY1: number;

    @ApiProperty({ description: 'The total estimated additional revenue for year  2', example: 2000000 })
    incrementalRevenueY2: number;

    @ApiProperty({ description: 'The total estimated additional revenue for year  3', example: 4000000 })
    incrementalRevenueY3: number;

    @ApiProperty({
        description: 'Is this concept additiaonl revenue active',
    })
    isActive: boolean;
}

export interface IConceptIncrementalRevenueDTO extends ConceptIncrementalRevenueDTO { }
