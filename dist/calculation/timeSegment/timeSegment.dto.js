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
exports.TimeSegmentDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
const mobilePunch_dto_1 = require("../../clock/mobilePunch/mobilePunch.dto");
const calculationPolicy_dto_1 = require("../../company/calculationPolicy/calculationPolicy.dto");
const payrollCode_dto_1 = require("../../company/payrollCode/payrollCode.dto");
const payrollPeriod_dto_1 = require("../../company/payrollPeriod/payrollPeriod.dto");
const payrollPeriodSegment_dto_1 = require("../../company/payrollPeriodSegment/payrollPeriodSegment.dto");
class TimeSegmentDTO {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The in for day mobile punch id this time segment is associated with',
    }),
    __metadata("design:type", String)
], TimeSegmentDTO.prototype, "inForDayMobilePunchId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'The start punch for this time segment' }),
    __metadata("design:type", mobilePunch_dto_1.MobilePunchDTO)
], TimeSegmentDTO.prototype, "startPunch", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'The end punch for this time segment' }),
    __metadata("design:type", mobilePunch_dto_1.MobilePunchDTO)
], TimeSegmentDTO.prototype, "endPunch", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'The length of this segment in minutes' }),
    __metadata("design:type", Number)
], TimeSegmentDTO.prototype, "segmentLengthMinutes", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The payroll code associated with this segment',
    }),
    __metadata("design:type", payrollCode_dto_1.PayrollCodeDTO)
], TimeSegmentDTO.prototype, "payrollCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The payroll period associated with this segment',
    }),
    __metadata("design:type", payrollPeriod_dto_1.PayrollPeriodDTO)
], TimeSegmentDTO.prototype, "payrollPeriod", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The payroll period segment associated with this segment',
    }),
    __metadata("design:type", payrollPeriodSegment_dto_1.PayrollPeriodSegmentDTO)
], TimeSegmentDTO.prototype, "payrollPeriodSegment", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The calculation policy associated with this segment',
    }),
    __metadata("design:type", calculationPolicy_dto_1.CalculationPolicyDTO)
], TimeSegmentDTO.prototype, "calculationPolicy", void 0);
exports.TimeSegmentDTO = TimeSegmentDTO;
//# sourceMappingURL=timeSegment.dto.js.map