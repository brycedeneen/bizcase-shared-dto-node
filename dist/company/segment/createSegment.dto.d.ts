export declare class CreateSegmentDTO {
    name: string;
    description: string;
    numberOfCustomers: number;
    annualRecurringRevenue: number;
    annualAttritionPercent: number;
    totalAddressableMarket: number;
    annualRecurringRevenueGrowthPercent: number;
    annualNewSalesQualifiedLeadsPercentOfTAM: number;
    baselineWinRatePercent: number;
    averageAnnualListPriceForNewSales: number;
    averageDiscountPercentForNewSales: number;
    averageAnnualPercentPriceIncrease: number;
    averageAnnualSalePricePerCrossSell: number;
    averageAnnualSalePricePerUpsellSell: number;
    averageNewLogoSalesCycleinMonths: number;
    averageNewLogoImplementationCycleinMonths: number;
    averageCrossSellSalesCycleinMonths: number;
    averageCrossSellImplementationCycleinMonths: number;
    salesAreSeasonal: boolean;
    averageSalesPercentJanuary: number;
    averageSalesPercentFebruary: number;
    averageSalesPercentMarch: number;
    averageSalesPercentApril: number;
    averageSalesPercentMay: number;
    averageSalesPercentJune: number;
    averageSalesPercentJuly: number;
    averageSalesPercentAugust: number;
    averageSalesPercentSeptember: number;
    averageSalesPercentOctober: number;
    averageSalesPercentNovember: number;
    averageSalesPercentDecember: number;
}
export interface ICreateSegmentDTO extends CreateSegmentDTO {
}
