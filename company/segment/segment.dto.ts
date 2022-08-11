import { ApiProperty } from '@nestjs/swagger';

export class SegmentDTO {
    @ApiProperty({ description: 'Segment Id' })
    segmentId: string;

    @ApiProperty({ description: 'Segment Name' })
    name: string;

    @ApiProperty({ description: 'Segment Description' })
    description: string;

    @ApiProperty({ description: 'Number of customers in this segment' })
    numberOfCustomers: number;

    @ApiProperty({ description: 'Current Annual Recurring Revenue', example: 10000000.00 })
    annualRecurringRevenue: number;

    @ApiProperty({ description: 'Annual Average or expected attrition percentage (use decimals for percent, aka 0.05 = 5%)', example: 0.05 })
    annualAttritionPercent: number;

    @ApiProperty({ description: 'The total addressable market for this feature and/or industry', example: 1000000.00 })
    totalAddressableMarket: number;

    @ApiProperty({ description: 'Expected ARR growth as a percent (use decimals for percent, aka 0.05 = 5%)', example: 0.05 })
    annualRecurringRevenueGrowthPercent: number;

    @ApiProperty({ description: 'The expectd new sales qualified leads as a percent of TAM as a percent (use decimals for percent, aka 0.05 = 5%)', example: 0.05 })
    annualNewSalesQualifiedLeadsPercentOfTAM: number;

    @ApiProperty({ description: 'The expectd win rate of qualified leads as a percent (use decimals for percent, aka 0.05 = 5%)', example: 0.05 })
    baselineWinRatePercent: number;

    @ApiProperty({ description: 'The average annual revenue list price for new sales', example: 12 })
    averageAnnualListPriceForNewSales: number;

    @ApiProperty({ description: 'The average or expectd discount rate for new sales as a percent (use decimals for percent, aka 0.05 = 5%)', example: 0.05 })
    averageDiscountPercentForNewSales: number;

    @ApiProperty({ description: 'The average or expectd annaul price increase as a percent (use decimals for percent, aka 0.05 = 5%)', example: 0.05 })
    averageAnnualPercentPriceIncrease: number;

    @ApiProperty({ description: 'The average annual revenue list price for cross sell sales', example: 12 })
    averageAnnualSalePricePerCrossSell: number;

    @ApiProperty({ description: 'The average annual revenue list price for upsell sales', example: 12 })
    averageAnnualSalePricePerUpsellSell: number;

    @ApiProperty({ description: 'The average or expected sales cycle time for new logos in months', example: 3 })
    averageNewLogoSalesCycleinMonths: number;

    @ApiProperty({ description: 'The average or expected implementation time for new logos in months', example: 3 })
    averageNewLogoImplementationCycleinMonths: number;

    @ApiProperty({ description: 'The average or expected sales cycle time for cross sell in months', example: 3 })
    averageCrossSellSalesCycleinMonths: number;

    @ApiProperty({ description: 'The average or expected sales cycle time for new logos in months', example: 3 })
    averageCrossSellImplementationCycleinMonths: number;

    @ApiProperty({
        description: 'The percentage of sales that occur in January as a percent (use decimals for percent, aka 0.05 = 5%)', example: 0.25,
        default: 0.0833
    })
    averageSalesPercentJanuary: number;

    @ApiProperty({
        description: 'The percentage of sales that occur in February as a percent (use decimals for percent, aka 0.05 = 5%)', example: 0.25,
        default: 0.0833
    })
    averageSalesPercentFebruary: number;

    @ApiProperty({
        description: 'The percentage of sales that occur in March as a percent (use decimals for percent, aka 0.05 = 5%)', example: 0.25,
        default: 0.0833
    })
    averageSalesPercentMarch: number;

    @ApiProperty({
        description: 'The percentage of sales that occur in April as a percent (use decimals for percent, aka 0.05 = 5%)', example: 0.25,
        default: 0.0833
    })
    averageSalesPercentApril: number;

    @ApiProperty({
        description: 'The percentage of sales that occur in May as a percent (use decimals for percent, aka 0.05 = 5%)', example: 0.25,
        default: 0.0833
    })
    averageSalesPercentMay: number;

    @ApiProperty({
        description: 'The percentage of sales that occur in June as a percent (use decimals for percent, aka 0.05 = 5%)', example: 0.25,
        default: 0.0833
    })
    averageSalesPercentJune: number;

    @ApiProperty({
        description: 'The percentage of sales that occur in July as a percent (use decimals for percent, aka 0.05 = 5%)', example: 0.25,
        default: 0.0833
    })
    averageSalesPercentJuly: number;

    @ApiProperty({
        description: 'The percentage of sales that occur in August as a percent (use decimals for percent, aka 0.05 = 5%)', example: 0.25,
        default: 0.0833
    })
    averageSalesPercentAugust: number;

    @ApiProperty({
        description: 'The percentage of sales that occur in September as a percent (use decimals for percent, aka 0.05 = 5%)', example: 0.25,
        default: 0.0833
    })
    averageSalesPercentSeptember: number;

    @ApiProperty({
        description: 'The percentage of sales that occur in October as a percent (use decimals for percent, aka 0.05 = 5%)', example: 0.25,
        default: 0.0834
    })
    averageSalesPercentOctober: number;

    @ApiProperty({
        description: 'The percentage of sales that occur in November as a percent (use decimals for percent, aka 0.05 = 5%)', example: 0.25,
        default: 0.0834
    })
    averageSalesPercentNovember: number;

    @ApiProperty({
        description: 'The percentage of sales that occur in December as a percent (use decimals for percent, aka 0.05 = 5%)', example: 0.25,
        default: 0.0834
    })
    averageSalesPercentDecember: number;

    @ApiProperty({
        description: 'Is this segment active',
    })
    isActive: boolean;
}

export interface ISegmentDTO extends SegmentDTO { }
