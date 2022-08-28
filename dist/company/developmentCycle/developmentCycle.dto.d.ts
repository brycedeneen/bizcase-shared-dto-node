export declare class DevelopmentCycleDTO {
    developmentCycleId: string;
    name: string;
    startDate: string;
    endDate: string;
    netPresentValuePercent: number;
    calculatedAvgDevelopmentWeekTotalCosts: number;
    isActive: boolean;
}
export interface IDevelopmentCycleDTO extends DevelopmentCycleDTO {
}
