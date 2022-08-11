import { ApiProperty } from '@nestjs/swagger';

export class ConceptDTO {
    @ApiProperty({ description: 'Concept Id' })
    conceptId: string;

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

    @ApiProperty({
        description: 'Is this theme active',
    })
    isActive: boolean;
}

export interface IConceptDTO extends ConceptDTO {}
