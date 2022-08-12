import { ApiProperty } from '@nestjs/swagger';

export class CreateTeamFTEDTO {
    @ApiProperty({
        description:
            'The number of On Shore Team Members on this team of this FTE Type',
    })
    onshoreHeadcount: number;

    @ApiProperty({
        description:
            'The number of Off Shore Team Members on this team of this FTE Type',
    })
    offshoreHeadcount: number;

    @ApiProperty({ description: 'Team FTE Id' })
    fteId: string;
}

export interface ICreateTeamFTEDTO extends CreateTeamFTEDTO {}
