import { ApiProperty } from '@nestjs/swagger';

export class CreateConceptRankingDTO {
    @ApiProperty({ description: 'Selected Ranking' })
    selectedRanking: number;

    @ApiProperty({ description: 'Scoring Criteria Id' })
    scoringCriteriaId: string;
}

export interface ICreateConceptRankingDTO extends CreateConceptRankingDTO {}
