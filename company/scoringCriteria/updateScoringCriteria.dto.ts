import { ApiProperty } from '@nestjs/swagger';

export class UpdateScoringCriteriaDTO {
    @ApiProperty({ description: 'Name of the Scoring Criteria' })
    name: string;

    @ApiProperty({ description: 'Description of the Scoring Criteria' })
    description: string;

    @ApiProperty({
        description:
            'The weight of this scoring criteria versus the other criteria, usually a percentage. The system will take the total weights across all scoring criteria and establish a final ratio.',
    })
    weight: number;

    @ApiProperty({
        description:
            'The number of unique criteria that will be associated with this Scoring Criteria.',
        default: 5,
    })
    numberOfCriteria: number;

    @ApiProperty({
        description:
            'The value or range associated with the lowest scored scoring criteria.',
        example: '<$1M',
    })
    criteria1: string;

    @ApiProperty({
        description:
            'The value or range associated with the second 3rd scoring criteria.',
        example: '$1M-$2M',
    })
    criteria2: string;

    @ApiProperty({
        description:
            'The value or range associated with the lowest 4th scoring criteria.',
        example: '$2M-$3m',
    })
    criteria3: string;

    @ApiProperty({
        description:
            'The value or range associated with the second 5th scoring criteria.',
    })
    criteria4: string;

    @ApiProperty({
        description:
            'The value or range associated with the second 6th scoring criteria.',
    })
    criteria5: string;

    @ApiProperty({
        description:
            'The value or range associated with the second 7th scoring criteria.',
    })
    criteria6: string;

    @ApiProperty({
        description:
            'The value or range associated with the second 8th scoring criteria.',
    })
    criteria7: string;

    @ApiProperty({
        description:
            'The value or range associated with the second 9th scoring criteria.',
    })
    criteria8: string;

    @ApiProperty({
        description:
            'The value or range associated with the second 10th scoring criteria.',
    })
    criteria9: string;

    @ApiProperty({
        description:
            'The value or range associated with the second lowest scoring criteria.',
    })
    criteria10: string;
}

export interface IUpdateScoringCriteriaDTO extends UpdateScoringCriteriaDTO {}
