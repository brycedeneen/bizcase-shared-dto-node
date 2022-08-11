import { ApiProperty } from '@nestjs/swagger';

export class CreateConceptRankingDTO {
    @ApiProperty({ description: 'Selected Ranking' })
    selectedRanking: number;
}

export interface ICreateConceptRankingDTO extends CreateConceptRankingDTO { }
