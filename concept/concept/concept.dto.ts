import { ApiProperty } from '@nestjs/swagger';
import {
    ConceptIncrementalCostV1DTO,
    ConceptIncrementalHiringV1DTO,
    ConceptIncrementalRevenueV1DTO,
    ConceptRankingV1DTO,
} from '.';
import { SelectedENUM } from '../../enums/concept';
import { ConceptSegmentV1DTO } from '../segment';

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
        description: 'The calcualted ROI of this concept',
    })
    calculatedROI: number;

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
        description:
            'Incremental Costs associated with this concept (ex: licensing, travel, etc).',
    })
    conceptIncrementalCosts: ConceptIncrementalCostV1DTO[];

    @ApiProperty({
        description:
            'Incremental Hiring associated with this concept (ex: support, marketing, development)',
    })
    conceptIncrementalHirings: ConceptIncrementalHiringV1DTO[];

    @ApiProperty({
        description: 'Incremental Revenue associated with this concept',
    })
    conceptIncrementalRevenues: ConceptIncrementalRevenueV1DTO[];

    @ApiProperty({
        description: 'Concept Rankings associated with this concept',
    })
    conceptRankings: ConceptRankingV1DTO[];

    @ApiProperty({
        description: 'Segment Override Data associated with this concept',
    })
    conceptSegments: ConceptSegmentV1DTO[];

    @ApiProperty({
        description: 'Is this concept active',
    })
    isActive: boolean;
}

export interface IConceptDTO extends ConceptDTO {}
