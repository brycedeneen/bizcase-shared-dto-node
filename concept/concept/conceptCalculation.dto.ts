import { ApiProperty } from '@nestjs/swagger';

export class ConceptCalculationDTO {
    @ApiProperty({ description: 'Concept Id' })
    conceptCalculationId: string;

    // Y1

    totalAccountsAtRiskCountY1: number;

    totalAdditionalAttritionPreventedCountY1: number;

    totalNewLogoWinsCountY1: number;

    totalNewCrossSellWinsCountY1: number;

    totalNewUpsellWinsCountY1: number;

    totalAccountsAtRiskRevenueY1: number;

    totalAdditionalAttritionPreventedRevenueY1: number;

    totalNewLogoWinsRevenueY1: number;

    totalNewCrossSellWinsRevenueY1: number;

    totalNewUpsellWinsRevenueY1: number;

    totalOtherRevenueY1: number;

    expectedNetCashFlowY1: number;

    expectedCumulativeTotalY1: number;

    expectedROIOnY1InvestmentY1: number;

    expectedNPVY1: number;

    percentOfOverallInvestmentY1: number;

    cumulativePaybackPeriodOnAnnualCostsY1: number;

    expectedROIOnTotal3YInvestmentY1: number;

    optimisticGrandTotalRevenueY1: number;

    optimisticNetCashFlowY1: number;

    optimisticCumulativeTotalY1: number;

    optimisticCumulativeROIY1: number;

    optimisticCumulativePaybackOnAnnualCostsY1: number;

    optimisticNPVY1: number;

    conservativeGrandTotalRevenueY1: number;

    conservativeNetCashFlowY1: number;

    conservativeCumulativeTotalY1: number;

    conservativeCumulativeROIY1: number;

    conservativeCumulativePaybackOnAnnualCostsY1: number;

    conservativeNPVY1: number;

    totalIncrementalHireY1: number;

    totalIncrementalCostY1: number;

    totalIncrementalRevenueToBusinessY1: number;

    grandTotalIncrementalRevenueToBusinessY1: number;

    totalInvestmentCostsY1: number;

    totalCumulativeInvestmentCostsY1: number;

    // Y2

    totalAccountsAtRiskCountY2: number;

    totalAdditionalAttritionPreventedCountY2: number;

    totalNewLogoWinsCountY2: number;

    totalNewCrossSellWinsCountY2: number;

    totalNewUpsellWinsCountY2: number;

    totalAccountsAtRiskRevenueY2: number;

    totalAdditionalAttritionPreventedRevenueY2: number;

    totalNewLogoWinsRevenueY2: number;

    totalNewCrossSellWinsRevenueY2: number;

    totalNewUpsellWinsRevenueY2: number;

    totalOtherRevenueY2: number;

    expectedNetCashFlowY2: number;

    expectedCumulativeTotalY2: number;

    expectedROIOnY1InvestmentY2: number;

    expectedNPVY2: number;

    percentOfOverallInvestmentY2: number;

    cumulativePaybackPeriodOnAnnualCostsY2: number;

    expectedROIOnTotal3YInvestmentY2: number;

    optimisticGrandTotalRevenueY2: number;

    optimisticNetCashFlowY2: number;

    optimisticCumulativeTotalY2: number;

    optimisticCumulativeROIY2: number;

    optimisticCumulativePaybackOnAnnualCostsY2: number;

    optimisticNPVY2: number;

    conservativeGrandTotalRevenueY2: number;

    conservativeNetCashFlowY2: number;

    conservativeCumulativeTotalY2: number;

    conservativeCumulativeROIY2: number;

    conservativeCumulativePaybackOnAnnualCostsY2: number;

    conservativeNPVY2: number;

    totalIncrementalHireY2: number;

    totalIncrementalCostY2: number;

    totalIncrementalRevenueToBusinessY2: number;

    grandTotalIncrementalRevenueToBusinessY2: number;

    totalInvestmentCostsY2: number;

    totalCumulativeInvestmentCostsY2: number;

    // Y3

    totalAccountsAtRiskCountY3: number;

    totalAdditionalAttritionPreventedCountY3: number;

    totalNewLogoWinsCountY3: number;

    totalNewCrossSellWinsCountY3: number;

    totalNewUpsellWinsCountY3: number;

    totalAccountsAtRiskRevenueY3: number;

    totalAdditionalAttritionPreventedRevenueY3: number;

    totalNewLogoWinsRevenueY3: number;

    totalNewCrossSellWinsRevenueY3: number;

    totalNewUpsellWinsRevenueY3: number;

    totalOtherRevenueY3: number;

    expectedNetCashFlowY3: number;

    expectedCumulativeTotalY3: number;

    expectedROIOnY1InvestmentY3: number;

    expectedNPVY3: number;

    percentOfOverallInvestmentY3: number;

    cumulativePaybackPeriodOnAnnualCostsY3: number;

    expectedROIOnTotal3YInvestmentY3: number;

    optimisticGrandTotalRevenueY3: number;

    optimisticNetCashFlowY3: number;

    optimisticCumulativeTotalY3: number;

    optimisticCumulativeROIY3: number;

    optimisticCumulativePaybackOnAnnualCostsY3: number;

    optimisticNPVY3: number;

    conservativeGrandTotalRevenueY3: number;

    conservativeNetCashFlowY3: number;

    conservativeCumulativeTotalY3: number;

    conservativeCumulativeROIY3: number;

    conservativeCumulativePaybackOnAnnualCostsY3: number;

    conservativeNPVY3: number;

    totalIncrementalHireY3: number;

    totalIncrementalCostY3: number;

    totalIncrementalRevenueToBusinessY3: number;

    grandTotalIncrementalRevenueToBusinessY3: number;

    totalInvestmentCostsY3: number;

    totalCumulativeInvestmentCostsY3: number;

    // 3YearTotal

    totalIncrementalRevenueToBusiness: number;

    averageIncrementalRevenueToBusiness: number;

    totalIncrementalHire: number;

    averageIncrementalHire: number;

    totalIncrementalCost: number;

    averageIncrementalCost: number;

    totalInvestmentCosts: number;

    averageInvestmentCosts: number;

    expectedNetCashflow3Year: number;

    expectedAverageNetCashflow3Year;

    percentOfOverallInvestment: number;

    cumulativePaybackPeriod: number;

    minimumRevenueDeferment: number;

    optimisticGrandTotalRevenue: number;

    optimisticCumulativePaybackPeriod: number;

    conservativeGrandTotalRevenue: number;

    conservativeCumulativePaybackPeriod: number;

    developmentCycleId: string;

    companyId: string;

    @ApiProperty({
        description: 'Is this concept active',
    })
    isActive: boolean;
}

export interface IConceptCalculationDTO extends ConceptCalculationDTO {}
