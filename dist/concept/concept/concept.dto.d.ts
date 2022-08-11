export declare class ConceptDTO {
    conceptId: string;
    name: string;
    description: string;
    selectedForBusinessCase: boolean;
    selectedForRoadmap: boolean;
    estimatedDevTimeInWeeks: number;
    isActive: boolean;
}
export interface IConceptDTO extends ConceptDTO {
}
