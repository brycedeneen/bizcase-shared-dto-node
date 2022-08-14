import { SelectedENUM } from '../../enums/concept';
export declare class ConceptDTO {
    conceptId: string;
    name: string;
    description: string;
    selectedForBusinessCase: SelectedENUM;
    selectedForRoadmap: SelectedENUM;
    calculatedPowerScore: number;
    estimatedDevTimeInWeeks: number;
    isActive: boolean;
}
export interface IConceptDTO extends ConceptDTO {
}
