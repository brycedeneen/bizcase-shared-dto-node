import { SelectedENUM } from '../../enums/concept';
import { ConceptSegmentDTO } from '../segment/conceptSegment.dto';
import { ConceptIncrementalCostDTO } from './conceptIncrementalCost.dto';
import { ConceptIncrementalHiringDTO } from './conceptIncrementalHiring.dto';
import { ConceptIncrementalRevenueDTO } from './conceptIncrementalRevenue.dto';
import { ConceptRankingDTO } from './conceptRanking.dto';
export declare class ConceptDTO {
    conceptId: string;
    name: string;
    description: string;
    selectedForBusinessCase: SelectedENUM;
    selectedForRoadmap: SelectedENUM;
    calculatedPowerScore: number;
    estimatedDevTimeInWeeks: number;
    themeName: string;
    themeID: string;
    conceptIncrementalCosts: ConceptIncrementalCostDTO[];
    conceptIncrementalHirings: ConceptIncrementalHiringDTO[];
    conceptIncrementalRevenues: ConceptIncrementalRevenueDTO[];
    conceptRankings: ConceptRankingDTO[];
    conceptSegments: ConceptSegmentDTO[];
    isActive: boolean;
}
export interface IConceptDTO extends ConceptDTO {
}
