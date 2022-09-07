import { ConceptIncrementalCostV1DTO, ConceptIncrementalHiringV1DTO, ConceptIncrementalRevenueV1DTO, ConceptRankingV1DTO } from '.';
import { SelectedENUM } from '../../enums/concept';
import { ConceptSegmentV1DTO } from '../segment';
export declare class ConceptDTO {
    conceptId: string;
    name: string;
    description: string;
    selectedForBusinessCase: SelectedENUM;
    selectedForRoadmap: SelectedENUM;
    calculatedPowerScore: number;
    calculatedROI: number;
    estimatedDevTimeInWeeks: number;
    monthsUntilDevelopmentStart: number;
    developmentDurationInMonths: number;
    themeName: string;
    themeID: string;
    conceptIncrementalCosts: ConceptIncrementalCostV1DTO[];
    conceptIncrementalHirings: ConceptIncrementalHiringV1DTO[];
    conceptIncrementalRevenues: ConceptIncrementalRevenueV1DTO[];
    conceptRankings: ConceptRankingV1DTO[];
    conceptSegments: ConceptSegmentV1DTO[];
    isActive: boolean;
}
export interface IConceptDTO extends ConceptDTO {
}
