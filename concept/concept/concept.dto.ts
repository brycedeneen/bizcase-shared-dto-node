import { ApiProperty } from '@nestjs/swagger';
import { SelectedENUM } from '../../enums/concept';
import { ConceptSegmentDTO } from '../segment/conceptSegment.dto';
import { ConceptIncrementalCostDTO } from './conceptIncrementalCost.dto';
import { ConceptIncrementalHiringDTO } from './conceptIncrementalHiring.dto';
import { ConceptIncrementalRevenueDTO } from './conceptIncrementalRevenue.dto';
import { ConceptRankingDTO } from './conceptRanking.dto';

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
        description:
            'Incremental Costs associated with this concept (ex: licensing, travel, etc).',
    })
    conceptIncrementalCosts: ConceptIncrementalCostDTO[];

    @ApiProperty({
        description:
            'Incremental Hiring associated with this concept (ex: support, marketing, development)',
    })
    conceptIncrementalHirings: ConceptIncrementalHiringDTO[];

    @ApiProperty({
        description: 'Incremental Revenue associated with this concept',
    })
    conceptIncrementalRevenues: ConceptIncrementalRevenueDTO[];

    @ApiProperty({
        description: 'Concept Rankings associated with this concept',
    })
    conceptRankings: ConceptRankingDTO[];

    @ApiProperty({
        description: 'Segment Override Data associated with this concept',
    })
    conceptSegments: ConceptSegmentDTO[];

    @ApiProperty({
        description: 'Is this concept active',
    })
    isActive: boolean;
}

export interface IConceptDTO extends ConceptDTO {}
