import { ApiProperty } from '@nestjs/swagger';

export class ConceptSegmentCalculationDTO {
    @ApiProperty({ description: 'Concept Id' })
    conceptSegmentCalculationId: string;

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

    newLogoRevenueMonth1: number;

    newLogoRevenueMonth2: number;

    newLogoRevenueMonth3: number;

    newLogoRevenueMonth4: number;

    newLogoRevenueMonth5: number;

    newLogoRevenueMonth6: number;

    newLogoRevenueMonth7: number;

    newLogoRevenueMonth8: number;

    newLogoRevenueMonth9: number;

    newLogoRevenueMonth10: number;

    newLogoRevenueMonth11: number;

    newLogoRevenueMonth12: number;

    newLogoRevenueMonth13: number;

    newLogoRevenueMonth14: number;

    newLogoRevenueMonth15: number;

    newLogoRevenueMonth16: number;

    newLogoRevenueMonth17: number;

    newLogoRevenueMonth18: number;

    newLogoRevenueMonth19: number;

    newLogoRevenueMonth20: number;

    newLogoRevenueMonth21: number;

    newLogoRevenueMonth22: number;

    newLogoRevenueMonth23: number;

    newLogoRevenueMonth24: number;

    newLogoRevenueMonth25: number;

    newLogoRevenueMonth26: number;

    newLogoRevenueMonth27: number;

    newLogoRevenueMonth28: number;

    newLogoRevenueMonth29: number;

    newLogoRevenueMonth30: number;

    newLogoRevenueMonth31: number;

    newLogoRevenueMonth32: number;

    newLogoRevenueMonth33: number;

    newLogoRevenueMonth34: number;

    newLogoRevenueMonth35: number;

    newLogoRevenueMonth36: number;

    crossSellRevenueMonth1: number;

    crossSellRevenueMonth2: number;

    crossSellRevenueMonth3: number;

    crossSellRevenueMonth4: number;

    crossSellRevenueMonth5: number;

    crossSellRevenueMonth6: number;

    crossSellRevenueMonth7: number;

    crossSellRevenueMonth8: number;

    crossSellRevenueMonth9: number;

    crossSellRevenueMonth10: number;

    crossSellRevenueMonth11: number;

    crossSellRevenueMonth12: number;

    crossSellRevenueMonth13: number;

    crossSellRevenueMonth14: number;

    crossSellRevenueMonth15: number;

    crossSellRevenueMonth16: number;

    crossSellRevenueMonth17: number;

    crossSellRevenueMonth18: number;

    crossSellRevenueMonth19: number;

    crossSellRevenueMonth20: number;

    crossSellRevenueMonth21: number;

    crossSellRevenueMonth22: number;

    crossSellRevenueMonth23: number;

    crossSellRevenueMonth24: number;

    crossSellRevenueMonth25: number;

    crossSellRevenueMonth26: number;

    crossSellRevenueMonth27: number;

    crossSellRevenueMonth28: number;

    crossSellRevenueMonth29: number;

    crossSellRevenueMonth30: number;

    crossSellRevenueMonth31: number;

    crossSellRevenueMonth32: number;

    crossSellRevenueMonth33: number;

    crossSellRevenueMonth34: number;

    crossSellRevenueMonth35: number;

    crossSellRevenueMonth36: number;

    calculatedAnnualRecurringDollarsPerNewSale: number;

    calculatedMonthlyRecurringDollarsPerNewSale: number;

    calculatedFirstTimeToNewLogoRevenueInMonths: number;

    calculatedFirstTimeToCrossSellLogoRevenueInMonths: number;

    conceptSegmentId: string;

    developmentCycleId: string;

    companyId: string;

    @ApiProperty({
        description: 'Is this concept active',
    })
    isActive: boolean;
}

export interface IConceptSegmentCalculationDTO
    extends ConceptSegmentCalculationDTO {}
