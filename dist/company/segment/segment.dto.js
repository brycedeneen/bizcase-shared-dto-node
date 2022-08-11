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
exports.SegmentDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
class SegmentDTO {
}
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Segment Id' }),
    __metadata("design:type", String)
], SegmentDTO.prototype, "segmentId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Segment Name' }),
    __metadata("design:type", String)
], SegmentDTO.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Segment Description' }),
    __metadata("design:type", String)
], SegmentDTO.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Number of customers in this segment' }),
    __metadata("design:type", Number)
], SegmentDTO.prototype, "numberOfCustomers", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Current Annual Recurring Revenue', example: 10000000.00 }),
    __metadata("design:type", Number)
], SegmentDTO.prototype, "annualRecurringRevenue", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Annual Average or expected attrition percentage (use decimals for percent, aka 0.05 = 5%)', example: 0.05 }),
    __metadata("design:type", Number)
], SegmentDTO.prototype, "annualAttritionPercent", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'The total addressable market for this feature and/or industry', example: 1000000.00 }),
    __metadata("design:type", Number)
], SegmentDTO.prototype, "totalAddressableMarket", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Expected ARR growth as a percent (use decimals for percent, aka 0.05 = 5%)', example: 0.05 }),
    __metadata("design:type", Number)
], SegmentDTO.prototype, "annualRecurringRevenueGrowthPercent", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'The expectd new sales qualified leads as a percent of TAM as a percent (use decimals for percent, aka 0.05 = 5%)', example: 0.05 }),
    __metadata("design:type", Number)
], SegmentDTO.prototype, "annualNewSalesQualifiedLeadsPercentOfTAM", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'The expectd win rate of qualified leads as a percent (use decimals for percent, aka 0.05 = 5%)', example: 0.05 }),
    __metadata("design:type", Number)
], SegmentDTO.prototype, "baselineWinRatePercent", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'The average annual revenue list price for new sales', example: 12 }),
    __metadata("design:type", Number)
], SegmentDTO.prototype, "averageAnnualListPriceForNewSales", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'The average or expectd discount rate for new sales as a percent (use decimals for percent, aka 0.05 = 5%)', example: 0.05 }),
    __metadata("design:type", Number)
], SegmentDTO.prototype, "averageDiscountPercentForNewSales", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'The average or expectd annaul price increase as a percent (use decimals for percent, aka 0.05 = 5%)', example: 0.05 }),
    __metadata("design:type", Number)
], SegmentDTO.prototype, "averageAnnualPercentPriceIncrease", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'The average annual revenue list price for cross sell sales', example: 12 }),
    __metadata("design:type", Number)
], SegmentDTO.prototype, "averageAnnualSalePricePerCrossSell", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'The average annual revenue list price for upsell sales', example: 12 }),
    __metadata("design:type", Number)
], SegmentDTO.prototype, "averageAnnualSalePricePerUpsellSell", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'The average or expected sales cycle time for new logos in months', example: 3 }),
    __metadata("design:type", Number)
], SegmentDTO.prototype, "averageNewLogoSalesCycleinMonths", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'The average or expected implementation time for new logos in months', example: 3 }),
    __metadata("design:type", Number)
], SegmentDTO.prototype, "averageNewLogoImplementationCycleinMonths", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'The average or expected sales cycle time for cross sell in months', example: 3 }),
    __metadata("design:type", Number)
], SegmentDTO.prototype, "averageCrossSellSalesCycleinMonths", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'The average or expected sales cycle time for new logos in months', example: 3 }),
    __metadata("design:type", Number)
], SegmentDTO.prototype, "averageCrossSellImplementationCycleinMonths", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The percentage of sales that occur in January as a percent (use decimals for percent, aka 0.05 = 5%)', example: 0.25,
        default: 0.0833
    }),
    __metadata("design:type", Number)
], SegmentDTO.prototype, "averageSalesPercentJanuary", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The percentage of sales that occur in February as a percent (use decimals for percent, aka 0.05 = 5%)', example: 0.25,
        default: 0.0833
    }),
    __metadata("design:type", Number)
], SegmentDTO.prototype, "averageSalesPercentFebruary", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The percentage of sales that occur in March as a percent (use decimals for percent, aka 0.05 = 5%)', example: 0.25,
        default: 0.0833
    }),
    __metadata("design:type", Number)
], SegmentDTO.prototype, "averageSalesPercentMarch", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The percentage of sales that occur in April as a percent (use decimals for percent, aka 0.05 = 5%)', example: 0.25,
        default: 0.0833
    }),
    __metadata("design:type", Number)
], SegmentDTO.prototype, "averageSalesPercentApril", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The percentage of sales that occur in May as a percent (use decimals for percent, aka 0.05 = 5%)', example: 0.25,
        default: 0.0833
    }),
    __metadata("design:type", Number)
], SegmentDTO.prototype, "averageSalesPercentMay", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The percentage of sales that occur in June as a percent (use decimals for percent, aka 0.05 = 5%)', example: 0.25,
        default: 0.0833
    }),
    __metadata("design:type", Number)
], SegmentDTO.prototype, "averageSalesPercentJune", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The percentage of sales that occur in July as a percent (use decimals for percent, aka 0.05 = 5%)', example: 0.25,
        default: 0.0833
    }),
    __metadata("design:type", Number)
], SegmentDTO.prototype, "averageSalesPercentJuly", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The percentage of sales that occur in August as a percent (use decimals for percent, aka 0.05 = 5%)', example: 0.25,
        default: 0.0833
    }),
    __metadata("design:type", Number)
], SegmentDTO.prototype, "averageSalesPercentAugust", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The percentage of sales that occur in September as a percent (use decimals for percent, aka 0.05 = 5%)', example: 0.25,
        default: 0.0833
    }),
    __metadata("design:type", Number)
], SegmentDTO.prototype, "averageSalesPercentSeptember", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The percentage of sales that occur in October as a percent (use decimals for percent, aka 0.05 = 5%)', example: 0.25,
        default: 0.0834
    }),
    __metadata("design:type", Number)
], SegmentDTO.prototype, "averageSalesPercentOctober", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The percentage of sales that occur in November as a percent (use decimals for percent, aka 0.05 = 5%)', example: 0.25,
        default: 0.0834
    }),
    __metadata("design:type", Number)
], SegmentDTO.prototype, "averageSalesPercentNovember", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The percentage of sales that occur in December as a percent (use decimals for percent, aka 0.05 = 5%)', example: 0.25,
        default: 0.0834
    }),
    __metadata("design:type", Number)
], SegmentDTO.prototype, "averageSalesPercentDecember", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Is this segment active',
    }),
    __metadata("design:type", Boolean)
], SegmentDTO.prototype, "isActive", void 0);
exports.SegmentDTO = SegmentDTO;
//# sourceMappingURL=segment.dto.js.map