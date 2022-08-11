"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateConceptSegmentDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
class CreateConceptSegmentDTO {
}
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'The number of months from the development cycle start date to when development can start in months', example: 6 }),
    __metadata("design:type", Number)
], CreateConceptSegmentDTO.prototype, "monthsUntilDevelopmentStart", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The number of customers that would be saved from attrition in Year 1', example: 25,
    }),
    __metadata("design:type", Number)
], CreateConceptSegmentDTO.prototype, "numberOfCustomersSavedFromAttritionY1", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The number of customers that will leave if this concept is not completed in Year 1', example: 5,
    }),
    __metadata("design:type", Number)
], CreateConceptSegmentDTO.prototype, "numberOfCustomersThatWillAttritWithoutThisFeatureY1", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The number of new logos attributed to the delivery of this concept in Year 1', example: 5,
    }),
    __metadata("design:type", Number)
], CreateConceptSegmentDTO.prototype, "numberOfNewLogosAttributedToThisConceptY1", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The number of cross sell customers attributed to the delivery of this concept in Year 1', example: 5,
    }),
    __metadata("design:type", Number)
], CreateConceptSegmentDTO.prototype, "numberOfCrossSellCustomersAttributedToThisConceptY1", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The number of upsell sell customers attributed to the delivery of this concept in Year 1', example: 5,
    }),
    __metadata("design:type", Number)
], CreateConceptSegmentDTO.prototype, "numberOfUpsellSellCustomersAttributedToThisConceptY1", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The number of customers that would be saved from attrition in Year 2', example: 25,
    }),
    __metadata("design:type", Number)
], CreateConceptSegmentDTO.prototype, "numberOfCustomersSavedFromAttritionY2", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The number of customers that will leave if this concept is not completed in Year 2', example: 5,
    }),
    __metadata("design:type", Number)
], CreateConceptSegmentDTO.prototype, "numberOfCustomersThatWillAttritWithoutThisFeatureY2", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The number of new logos attributed to the delivery of this concept in Year 2', example: 5,
    }),
    __metadata("design:type", Number)
], CreateConceptSegmentDTO.prototype, "numberOfNewLogosAttributedToThisConceptY2", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The number of cross sell customers attributed to the delivery of this concept in Year 2', example: 5,
    }),
    __metadata("design:type", Number)
], CreateConceptSegmentDTO.prototype, "numberOfCrossSellCustomersAttributedToThisConceptY2", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The number of upsell sell customers attributed to the delivery of this concept in Year 2', example: 5,
    }),
    __metadata("design:type", Number)
], CreateConceptSegmentDTO.prototype, "numberOfUpsellSellCustomersAttributedToThisConceptY2", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The number of customers that would be saved from attrition in Year 3', example: 25,
    }),
    __metadata("design:type", Number)
], CreateConceptSegmentDTO.prototype, "numberOfCustomersSavedFromAttritionY3", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The number of customers that will leave if this concept is not completed in Year 3', example: 5,
    }),
    __metadata("design:type", Number)
], CreateConceptSegmentDTO.prototype, "numberOfCustomersThatWillAttritWithoutThisFeatureY3", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The number of new logos attributed to the delivery of this concept in Year 3', example: 5,
    }),
    __metadata("design:type", Number)
], CreateConceptSegmentDTO.prototype, "numberOfNewLogosAttributedToThisConceptY3", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The number of cross sell customers attributed to the delivery of this concept in Year 3', example: 5,
    }),
    __metadata("design:type", Number)
], CreateConceptSegmentDTO.prototype, "numberOfCrossSellCustomersAttributedToThisConceptY3", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The number of upsell sell customers attributed to the delivery of this concept in Year 3', example: 5,
    }),
    __metadata("design:type", Number)
], CreateConceptSegmentDTO.prototype, "numberOfUpsellSellCustomersAttributedToThisConceptY3", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Number of customers in this segment' }),
    __metadata("design:type", Number)
], CreateConceptSegmentDTO.prototype, "numberOfCustomers", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Current Annual Recurring Revenue', example: 10000000.00 }),
    __metadata("design:type", Number)
], CreateConceptSegmentDTO.prototype, "annualRecurringRevenue", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Annual Average or expected attrition percentage (use decimals for percent, aka 0.05 = 5%)', example: 0.05 }),
    __metadata("design:type", Number)
], CreateConceptSegmentDTO.prototype, "annualAttritionPercent", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'The total addressable market for this feature and/or industry', example: 1000000.00 }),
    __metadata("design:type", Number)
], CreateConceptSegmentDTO.prototype, "totalAddressableMarket", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Expected ARR growth as a percent (use decimals for percent, aka 0.05 = 5%)', example: 0.05 }),
    __metadata("design:type", Number)
], CreateConceptSegmentDTO.prototype, "annualRecurringRevenueGrowthPercent", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'The expectd new sales qualified leads as a percent of TAM as a percent (use decimals for percent, aka 0.05 = 5%)', example: 0.05 }),
    __metadata("design:type", Number)
], CreateConceptSegmentDTO.prototype, "annualNewSalesQualifiedLeadsPercentOfTAM", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'The expectd win rate of qualified leads as a percent (use decimals for percent, aka 0.05 = 5%)', example: 0.05 }),
    __metadata("design:type", Number)
], CreateConceptSegmentDTO.prototype, "baselineWinRatePercent", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'The average annual revenue list price for new sales', example: 12 }),
    __metadata("design:type", Number)
], CreateConceptSegmentDTO.prototype, "averageAnnualListPriceForNewSales", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'The average or expectd discount rate for new sales as a percent (use decimals for percent, aka 0.05 = 5%)', example: 0.05 }),
    __metadata("design:type", Number)
], CreateConceptSegmentDTO.prototype, "averageDiscountPercentForNewSales", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'The average or expectd annaul price increase as a percent (use decimals for percent, aka 0.05 = 5%)', example: 0.05 }),
    __metadata("design:type", Number)
], CreateConceptSegmentDTO.prototype, "averageAnnualPercentPriceIncrease", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'The average annual revenue list price for cross sell sales', example: 12 }),
    __metadata("design:type", Number)
], CreateConceptSegmentDTO.prototype, "averageAnnualSalePricePerCrossSell", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'The average annual revenue list price for upsell sales', example: 12 }),
    __metadata("design:type", Number)
], CreateConceptSegmentDTO.prototype, "averageAnnualSalePricePerUpsellSell", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'The average or expected sales cycle time for new logos in months', example: 3 }),
    __metadata("design:type", Number)
], CreateConceptSegmentDTO.prototype, "averageNewLogoSalesCycleinMonths", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'The average or expected implementation time for new logos in months', example: 3 }),
    __metadata("design:type", Number)
], CreateConceptSegmentDTO.prototype, "averageNewLogoImplementationCycleinMonths", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'The average or expected sales cycle time for cross sell in months', example: 3 }),
    __metadata("design:type", Number)
], CreateConceptSegmentDTO.prototype, "averageCrossSellSalesCycleinMonths", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'The average or expected sales cycle time for new logos in months', example: 3 }),
    __metadata("design:type", Number)
], CreateConceptSegmentDTO.prototype, "averageCrossSellImplementationCycleinMonths", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The percentage of sales that occur in January as a percent (use decimals for percent, aka 0.05 = 5%)', example: 0.25,
        default: 0.0833
    }),
    __metadata("design:type", Number)
], CreateConceptSegmentDTO.prototype, "averageSalesPercentJanuary", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The percentage of sales that occur in February as a percent (use decimals for percent, aka 0.05 = 5%)', example: 0.25,
        default: 0.0833
    }),
    __metadata("design:type", Number)
], CreateConceptSegmentDTO.prototype, "averageSalesPercentFebruary", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The percentage of sales that occur in March as a percent (use decimals for percent, aka 0.05 = 5%)', example: 0.25,
        default: 0.0833
    }),
    __metadata("design:type", Number)
], CreateConceptSegmentDTO.prototype, "averageSalesPercentMarch", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The percentage of sales that occur in April as a percent (use decimals for percent, aka 0.05 = 5%)', example: 0.25,
        default: 0.0833
    }),
    __metadata("design:type", Number)
], CreateConceptSegmentDTO.prototype, "averageSalesPercentApril", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The percentage of sales that occur in May as a percent (use decimals for percent, aka 0.05 = 5%)', example: 0.25,
        default: 0.0833
    }),
    __metadata("design:type", Number)
], CreateConceptSegmentDTO.prototype, "averageSalesPercentMay", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The percentage of sales that occur in June as a percent (use decimals for percent, aka 0.05 = 5%)', example: 0.25,
        default: 0.0833
    }),
    __metadata("design:type", Number)
], CreateConceptSegmentDTO.prototype, "averageSalesPercentJune", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The percentage of sales that occur in July as a percent (use decimals for percent, aka 0.05 = 5%)', example: 0.25,
        default: 0.0833
    }),
    __metadata("design:type", Number)
], CreateConceptSegmentDTO.prototype, "averageSalesPercentJuly", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The percentage of sales that occur in August as a percent (use decimals for percent, aka 0.05 = 5%)', example: 0.25,
        default: 0.0833
    }),
    __metadata("design:type", Number)
], CreateConceptSegmentDTO.prototype, "averageSalesPercentAugust", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The percentage of sales that occur in September as a percent (use decimals for percent, aka 0.05 = 5%)', example: 0.25,
        default: 0.0833
    }),
    __metadata("design:type", Number)
], CreateConceptSegmentDTO.prototype, "averageSalesPercentSeptember", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The percentage of sales that occur in October as a percent (use decimals for percent, aka 0.05 = 5%)', example: 0.25,
        default: 0.0834
    }),
    __metadata("design:type", Number)
], CreateConceptSegmentDTO.prototype, "averageSalesPercentOctober", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The percentage of sales that occur in November as a percent (use decimals for percent, aka 0.05 = 5%)', example: 0.25,
        default: 0.0834
    }),
    __metadata("design:type", Number)
], CreateConceptSegmentDTO.prototype, "averageSalesPercentNovember", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The percentage of sales that occur in December as a percent (use decimals for percent, aka 0.05 = 5%)', example: 0.25,
        default: 0.0834
    }),
    __metadata("design:type", Number)
], CreateConceptSegmentDTO.prototype, "averageSalesPercentDecember", void 0);
exports.CreateConceptSegmentDTO = CreateConceptSegmentDTO;
//# sourceMappingURL=createConceptSegment.dto.js.map