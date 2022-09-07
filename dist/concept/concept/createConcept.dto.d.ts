import { SelectedENUM } from '../../enums/concept';
export declare class CreateConceptDTO {
    name: string;
    description: string;
    selectedForBusinessCase: SelectedENUM;
    selectedForRoadmap: SelectedENUM;
    estimatedDevTimeInWeeks: number;
    monthsUntilDevelopmentStart: number;
    developmentDurationInMonths: number;
    themeID: string;
}
export interface ICreateConceptDTO extends CreateConceptDTO {
}
