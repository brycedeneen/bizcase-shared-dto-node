import { FTEV1DTO } from '../fte';
export declare class TeamFTEDTO {
    teamFTEId: string;
    onshoreHeadcount: number;
    offshoreHeadcount: number;
    fteId: string;
    fte: FTEV1DTO;
}
export interface ITeamFTEDTO extends TeamFTEDTO {
}
