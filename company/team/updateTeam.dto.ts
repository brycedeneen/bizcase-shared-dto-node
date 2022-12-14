import { ApiProperty } from '@nestjs/swagger';

export class UpdateTeamDTO {
    @ApiProperty({ description: 'Name of the team' })
    name: string;

    @ApiProperty({
        description:
            'The percentage of time the team is allocated to development, usually about 80%. Use decimals to represent percent (aka 0.75 = 75%)',
        example: 0.8,
        default: 0.8,
    })
    percentAllocatedToDevelopment: number;

    @ApiProperty({
        description:
            'The percentage of development time the team is allocated to working on prioritized concepts. Use decimals to represent percent (aka 0.75 = 75%)',
        example: 0.75,
        default: 0.5,
    })
    percentAllocatedToPrioritizedConcepts: number;

    @ApiProperty({
        description:
            'The percentage of the year the team is active and ramped up. If your teams take 3 months to ramp up, will start April 1st, and your Development cycle runs 1/1 to 12/31, then you would use 50%. Use decimals to represent percent (aka 0.75 = 75%)',
        example: 1.0,
        default: 1,
    })
    percentOfYearTeamIsActive: number;

    @ApiProperty({
        description:
            'The fully loaded cost per development week (product, marketing, development, etc)',
        example: 2500,
    })
    overrideConceptDevelopmentWeekCost;
}

export interface IUpdateTeamDTO extends UpdateTeamDTO {}
