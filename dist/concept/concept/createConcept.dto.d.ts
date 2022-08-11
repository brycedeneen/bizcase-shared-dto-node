import { SelectedENUM } from '../../enums/concept';
export declare class CreateConceptDTO {
    name: string;
    description: string;
    selectedForBusinessCase: SelectedENUM;
    selectedForRoadmap: SelectedENUM;
    estimatedDevTimeInWeeks: number;
}
export interface ICreateConceptDTO extends CreateConceptDTO {
}
