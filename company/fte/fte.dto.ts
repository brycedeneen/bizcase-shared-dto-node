import { ApiProperty } from '@nestjs/swagger';
import { FTETypeENUM } from '../../enums/company';

export class FTEDTO {
    @ApiProperty({ description: 'FTE Id' })
    fteId: string;

    @ApiProperty({
        description: 'Name of this FTE Type',
        example: 'Developer / Engineer',
    })
    name: string;

    @ApiProperty({
        description:
            'Should this FTE type be included in a teams composition (and be part of the associated cost and ROI calculatons',
        default: true,
    })
    includeInTeamComposition: boolean;

    @ApiProperty({
        description:
            'The average fully loaded cost of an onshore team member (salary, bonus, benefits, etc) for this FTE type (average cost is across your whole organization)',
    })
    onshoreAVGCosts: number;

    @ApiProperty({
        description:
            'The average fully loaded cost of an onshore team member  (salary, bonus, benefits, etc) for this FTE type (average cost is across your whole organization)',
    })
    offshoreAVGCosts: number;

    @ApiProperty({
        description: `The type or category of this FTE: ${JSON.stringify(
            FTETypeENUM,
        )}`,
    })
    fteType: FTETypeENUM;

    @ApiProperty({
        description: 'Is this theme active',
    })
    isActive: boolean;
}

export interface IFTEDTO extends FTEDTO {}
