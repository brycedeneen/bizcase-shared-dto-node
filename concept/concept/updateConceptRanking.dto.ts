import { ApiProperty } from '@nestjs/swagger';

export class UpdateConceptRankingDTO {
    @ApiProperty({ description: 'Selected Ranking' })
    selectedRanking: number;
}

export interface IUpdateConceptRankingDTO extends UpdateConceptRankingDTO { }
