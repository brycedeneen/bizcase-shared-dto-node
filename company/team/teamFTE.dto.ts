import { ApiProperty } from '@nestjs/swagger';
import { FTEV1DTO } from '../fte';

export class TeamFTEDTO {
    @ApiProperty({ description: 'Team FTE Id' })
    teamFTEId: string;

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

    @ApiProperty({ description: 'Team FTE Name' })
    fte: FTEV1DTO;
}

export interface ITeamFTEDTO extends TeamFTEDTO {}
