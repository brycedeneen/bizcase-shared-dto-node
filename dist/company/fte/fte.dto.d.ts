import { FTETypeENUM } from '../../enums/company';
export declare class FTEDTO {
    fteId: string;
    name: string;
    includeInTeamComposition: boolean;
    onshoreAVGCosts: number;
    offshoreAVGCosts: number;
    fteType: FTETypeENUM;
    isActive: boolean;
}
export interface IFTEDTO extends FTEDTO {
}
