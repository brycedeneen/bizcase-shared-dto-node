import { ApiProperty } from '@nestjs/swagger';
import { SelectedENUM } from '../../enums/concept';

export class UpdateConceptDTO {
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
        description: 'Number of development weeks to deliver this concept',
    })
    estimatedDevTimeInWeeks: number;

    @ApiProperty({
        description: 'Theme Id associated with this concept',
    })
    themeID: string;
}

export interface IUpdateConceptDTO extends UpdateConceptDTO {}
