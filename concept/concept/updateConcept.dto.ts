import { ApiProperty } from '@nestjs/swagger';

export class UpdateConceptDTO {
    @ApiProperty({ description: 'Name of the concept' })
    name: string;

    @ApiProperty({ description: 'Description of the concept' })
    description: string;

    @ApiProperty({
        description:
            'Is this concept being selected for business case evaluation',
    })
    selectedForBusinessCase: boolean;

    @ApiProperty({
        description: 'Is this concept being promoted to a Roadmap item',
    })
    selectedForRoadmap: boolean;

    @ApiProperty({
        description: 'Number of development weeks to deliver this concept',
    })
    estimatedDevTimeInWeeks: number;
}

export interface IUpdateConceptDTO extends UpdateConceptDTO {}