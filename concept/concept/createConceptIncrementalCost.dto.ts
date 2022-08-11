import { ApiProperty } from '@nestjs/swagger';

export class CreateConceptIncrementalCostDTO {
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
}

export interface ICreateConceptIncrementalCostDTO extends CreateConceptIncrementalCostDTO { }
