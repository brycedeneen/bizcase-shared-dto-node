import { SelectedENUM } from '../../enums/concept';
export declare class UpdateConceptDTO {
    name: string;
    description: string;
    selectedForBusinessCase: SelectedENUM;
    selectedForRoadmap: SelectedENUM;
    estimatedDevTimeInWeeks: number;
    monthsUntilDevelopmentStart: number;
    developmentDurationInMonths: number;
    themeID: string;
}
export interface IUpdateConceptDTO extends UpdateConceptDTO {
}
