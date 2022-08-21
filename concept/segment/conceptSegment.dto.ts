import { ApiProperty } from '@nestjs/swagger';

export class ConceptSegmentDTO {
    @ApiProperty({ description: 'Segment Id' })
    conceptSegmentId: string;

    @ApiProperty({ description: 'Number of customers in this segment' })
    numberOfCustomers: number;

    @ApiProperty({
        description: 'Current Annual Recurring Revenue',
        example: 10000000.0,
    })
    annualRecurringRevenue: number;

    @ApiProperty({
        description:
            'Annual Average or expected attrition percentage (use decimals for percent, aka 0.05 = 5%)',
        example: 0.05,
    })
    annualAttritionPercent: number;

    @ApiProperty({
        description:
            'The total addressable market for this feature and/or industry',
        example: 1000000.0,
    })
    totalAddressableMarket: number;

    @ApiProperty({
        description:
            'Expected ARR growth as a percent (use decimals for percent, aka 0.05 = 5%)',
        example: 0.05,
    })
    annualRecurringRevenueGrowthPercent: number;

    @ApiProperty({
        description:
            'The expectd new sales qualified leads as a percent of TAM as a percent (use decimals for percent, aka 0.05 = 5%)',
        example: 0.05,
    })
    annualNewSalesQualifiedLeadsPercentOfTAM: number;

    @ApiProperty({
        description:
            'The expectd win rate of qualified leads as a percent (use decimals for percent, aka 0.05 = 5%)',
        example: 0.05,
    })
    baselineWinRatePercent: number;

    @ApiProperty({
        description: 'The average annual revenue list price for new sales',
        example: 12,
    })
    averageAnnualListPriceForNewSales: number;

    @ApiProperty({
        description:
            'The average or expectd discount rate for new sales as a percent (use decimals for percent, aka 0.05 = 5%)',
        example: 0.05,
    })
    averageDiscountPercentForNewSales: number;

    @ApiProperty({
        description:
            'The average or expectd annaul price increase as a percent (use decimals for percent, aka 0.05 = 5%)',
        example: 0.05,
    })
    averageAnnualPercentPriceIncrease: number;

    @ApiProperty({
        description:
            'The average annual revenue list price for cross sell sales',
        example: 12,
    })
    averageAnnualSalePricePerCrossSell: number;

    @ApiProperty({
        description: 'The average annual revenue list price for upsell sales',
        example: 12,
    })
    averageAnnualSalePricePerUpsellSell: number;

    @ApiProperty({
        description:
            'The number of months from the development cycle start date to when development can start in months',
        example: 6,
    })
    monthsUntilDevelopmentStart: number;

    @ApiProperty({
        description:
            'The average or expected sales cycle time for new logos in months',
        example: 3,
    })
    averageNewLogoSalesCycleinMonths: number;

    @ApiProperty({
        description:
            'The average or expected implementation time for new logos in months',
        example: 3,
    })
    averageNewLogoImplementationCycleinMonths: number;

    @ApiProperty({
        description:
            'The average or expected sales cycle time for cross sell in months',
        example: 3,
    })
    averageCrossSellSalesCycleinMonths: number;

    @ApiProperty({
        description:
            'The average or expected sales cycle time for new logos in months',
        example: 3,
    })
    averageCrossSellImplementationCycleinMonths: number;

    @ApiProperty({
        description:
            'The percentage of sales that occur in January as a percent (use decimals for percent, aka 0.05 = 5%)',
        example: 0.25,
        default: 0.0833,
    })
    averageSalesPercentJanuary: number;

    @ApiProperty({
        description:
            'The percentage of sales that occur in February as a percent (use decimals for percent, aka 0.05 = 5%)',
        example: 0.25,
        default: 0.0833,
    })
    averageSalesPercentFebruary: number;

    @ApiProperty({
        description:
            'The percentage of sales that occur in March as a percent (use decimals for percent, aka 0.05 = 5%)',
        example: 0.25,
        default: 0.0833,
    })
    averageSalesPercentMarch: number;

    @ApiProperty({
        description:
            'The percentage of sales that occur in April as a percent (use decimals for percent, aka 0.05 = 5%)',
        example: 0.25,
        default: 0.0833,
    })
    averageSalesPercentApril: number;

    @ApiProperty({
        description:
            'The percentage of sales that occur in May as a percent (use decimals for percent, aka 0.05 = 5%)',
        example: 0.25,
        default: 0.0833,
    })
    averageSalesPercentMay: number;

    @ApiProperty({
        description:
            'The percentage of sales that occur in June as a percent (use decimals for percent, aka 0.05 = 5%)',
        example: 0.25,
        default: 0.0833,
    })
    averageSalesPercentJune: number;

    @ApiProperty({
        description:
            'The percentage of sales that occur in July as a percent (use decimals for percent, aka 0.05 = 5%)',
        example: 0.25,
        default: 0.0833,
    })
    averageSalesPercentJuly: number;

    @ApiProperty({
        description:
            'The percentage of sales that occur in August as a percent (use decimals for percent, aka 0.05 = 5%)',
        example: 0.25,
        default: 0.0833,
    })
    averageSalesPercentAugust: number;

    @ApiProperty({
        description:
            'The percentage of sales that occur in September as a percent (use decimals for percent, aka 0.05 = 5%)',
        example: 0.25,
        default: 0.0833,
    })
    averageSalesPercentSeptember: number;

    @ApiProperty({
        description:
            'The percentage of sales that occur in October as a percent (use decimals for percent, aka 0.05 = 5%)',
        example: 0.25,
        default: 0.0834,
    })
    averageSalesPercentOctober: number;

    @ApiProperty({
        description:
            'The percentage of sales that occur in November as a percent (use decimals for percent, aka 0.05 = 5%)',
        example: 0.25,
        default: 0.0834,
    })
    averageSalesPercentNovember: number;

    @ApiProperty({
        description:
            'The percentage of sales that occur in December as a percent (use decimals for percent, aka 0.05 = 5%)',
        example: 0.25,
        default: 0.0834,
    })
    averageSalesPercentDecember: number;

    // Y1 Sales Start
    @ApiProperty({
        description:
            'The number of customers that would be saved from attrition in Year 1',
        example: 25,
    })
    numberOfCustomersSavedFromAttritionY1: number;

    @ApiProperty({
        description:
            'The number of customers that will leave if this concept is not completed in Year 1',
        example: 5,
    })
    numberOfCustomersThatWillAttritWithoutThisFeatureY1: number;

    @ApiProperty({
        description:
            'The number of new logos attributed to the delivery of this concept in Year 1',
        example: 5,
    })
    numberOfNewLogosAttributedToThisConceptY1: number;

    @ApiProperty({
        description:
            'The number of cross sell customers attributed to the delivery of this concept in Year 1',
        example: 5,
    })
    numberOfCrossSellCustomersAttributedToThisConceptY1: number;

    @ApiProperty({
        description:
            'The number of upsell sell customers attributed to the delivery of this concept in Year 1',
        example: 5,
    })
    numberOfUpsellSellCustomersAttributedToThisConceptY1: number;
    // Y1 Sales End

    // Y2 Sales Start
    @ApiProperty({
        description:
            'The number of customers that would be saved from attrition in Year 2',
        example: 25,
    })
    numberOfCustomersSavedFromAttritionY2: number;

    @ApiProperty({
        description:
            'The number of customers that will leave if this concept is not completed in Year 2',
        example: 5,
    })
    numberOfCustomersThatWillAttritWithoutThisFeatureY2: number;

    @ApiProperty({
        description:
            'The number of new logos attributed to the delivery of this concept in Year 2',
        example: 5,
    })
    numberOfNewLogosAttributedToThisConceptY2: number;

    @ApiProperty({
        description:
            'The number of cross sell customers attributed to the delivery of this concept in Year 2',
        example: 5,
    })
    numberOfCrossSellCustomersAttributedToThisConceptY2: number;

    @ApiProperty({
        description:
            'The number of upsell sell customers attributed to the delivery of this concept in Year 2',
        example: 5,
    })
    numberOfUpsellSellCustomersAttributedToThisConceptY2: number;
    // Y2 Sales End

    // Y3 Sales Start
    @ApiProperty({
        description:
            'The number of customers that would be saved from attrition in Year 3',
        example: 25,
    })
    numberOfCustomersSavedFromAttritionY3: number;

    @ApiProperty({
        description:
            'The number of customers that will leave if this concept is not completed in Year 3',
        example: 5,
    })
    numberOfCustomersThatWillAttritWithoutThisFeatureY3: number;

    @ApiProperty({
        description:
            'The number of new logos attributed to the delivery of this concept in Year 3',
        example: 5,
    })
    numberOfNewLogosAttributedToThisConceptY3: number;

    @ApiProperty({
        description:
            'The number of cross sell customers attributed to the delivery of this concept in Year 3',
        example: 5,
    })
    numberOfCrossSellCustomersAttributedToThisConceptY3: number;

    @ApiProperty({
        description:
            'The number of upsell sell customers attributed to the delivery of this concept in Year 3',
        example: 5,
    })
    numberOfUpsellSellCustomersAttributedToThisConceptY3: number;
    // Y3 Sales End

    @ApiProperty({
        description: 'Segment Id',
    })
    segmentId: string;

    @ApiProperty({
        description: 'Is this segment active',
    })
    isActive: boolean;
}

export interface IConceptSegmentDTO extends ConceptSegmentDTO {}
