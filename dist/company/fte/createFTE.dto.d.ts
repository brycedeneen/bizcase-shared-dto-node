import { FTETypeENUM } from '../../enums/company';
export declare class CreateFTEDTO {
    name: string;
    includeInTeamComposition: boolean;
    onshoreAVGCosts: number;
    offshoreAVGCosts: number;
    fteType: FTETypeENUM;
}
export interface ICreateFTEDTO extends CreateFTEDTO {
}
