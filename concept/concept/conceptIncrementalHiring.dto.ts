import { ApiProperty } from '@nestjs/swagger';

export class ConceptIncrementalHiringDTO {
    @ApiProperty({ description: 'Segment Incremental Hiring Id' })
    segmentIncrementalHiringId: string;

    @ApiProperty({ description: 'The number of incremental FTEs in Year 1', example: 3 })
    onShoreCountY1: number;

    @ApiProperty({ description: 'The number of incremental FTEs in Year 2', example: 2 })
    onShoreCountY2: number;

    @ApiProperty({ description: 'The number of incremental FTEs in Year 3', example: 1 })
    onShoreCountY3: number;

    @ApiProperty({ description: 'The number of incremental FTEs in Year 1', example: 3 })
    offShoreCountY1: number;

    @ApiProperty({ description: 'The number of incremental FTEs in Year 2', example: 2 })
    offShoreCountY2: number;

    @ApiProperty({ description: 'The number of incremental FTEs in Year 3', example: 1 })
    offShoreCountY3: number;

    @ApiProperty({ description: 'The ID of the FTE be added' })
    fteId: string

}

export interface IConceptIncrementalHiringDTO extends ConceptIncrementalHiringDTO { }
