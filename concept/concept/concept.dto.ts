import { ApiProperty } from '@nestjs/swagger';
import { SelectedENUM } from '../../enums/concept';

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
    selectedForBusinessCase: SelectedENUM;

    @ApiProperty({
        description: 'Is this concept being promoted to a Roadmap item',
    })
    selectedForRoadmap: SelectedENUM;

    @ApiProperty({
        description: 'The calcualted power score of this concept',
    })
    calculatedPowerScore: number;

    @ApiProperty({
        description: 'Number of development weeks to deliver this concept',
    })
    estimatedDevTimeInWeeks: number;

    @ApiProperty({
        description: 'Name of the theme associated with this concept',
    })
    themeName: string;

    @ApiProperty({
        description: 'Theme Id associated with this concept',
    })
    themeID: string;

    @ApiProperty({
        description: 'Is this concept active',
    })
    isActive: boolean;
}

export interface IConceptDTO extends ConceptDTO {}
