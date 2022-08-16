import { ApiProperty } from '@nestjs/swagger';

export class ConceptRankingDTO {
    @ApiProperty({ description: 'Concept Ranking Id' })
    conceptRankingId: string;

    @ApiProperty({ description: 'Selected Ranking' })
    selectedRanking: number;

    @ApiProperty({ description: 'Scoring Criteria Id' })
    scoringCriteriaId: string;

    @ApiProperty({
        description: 'Is this concept active',
    })
    isActive: boolean;
}

export interface IConceptRankingDTO extends ConceptRankingDTO {}
