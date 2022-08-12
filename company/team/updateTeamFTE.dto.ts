import { ApiProperty } from '@nestjs/swagger';

export class UpdateTeamFTEDTO {
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
}

export interface IUpdateTeamFTEDTO extends UpdateTeamFTEDTO {}
