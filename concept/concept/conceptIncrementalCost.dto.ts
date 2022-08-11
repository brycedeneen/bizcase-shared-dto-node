import { ApiProperty } from '@nestjs/swagger';

export class ConceptIncrementalCostDTO {
    @ApiProperty({ description: 'Segment Incremental Costs Id' })
    conceptIncrementalCostId: string;

    @ApiProperty({ description: 'Name or title of the incremental cost' })
    name: string;

    @ApiProperty({ description: 'Description of the incremental cost' })
    description: string;

    @ApiProperty({ description: 'Incremental Costs in Year 1' })
    incrementalCostY1: number;

    @ApiProperty({ description: 'Incremental Costs in Year 2' })
    incrementalCostY2: number;

    @ApiProperty({ description: 'Incremental Costs in Year 3' })
    incrementalCostY3: number;

    @ApiProperty({
        description: 'Is this Concept Incremental Cost active',
    })
    isActive: boolean;
}

export interface IConceptIncrementalCostDTO extends ConceptIncrementalCostDTO { }
