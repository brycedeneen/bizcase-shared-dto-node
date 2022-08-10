import { FTETypeENUM } from '../../enums/company';
export declare class UpdateFTEDTO {
    name: string;
    includeInTeamComposition: boolean;
    onshoreAVGCosts: number;
    offshoreAVGCosts: number;
    fteType: FTETypeENUM;
}
export interface IUpdateFTEDTO extends UpdateFTEDTO {
}
