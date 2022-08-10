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
exports.TimeSegmentInToOutSegmentDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
const calculationPolicy_dto_1 = require("../../company/calculationPolicy/calculationPolicy.dto");
const payrollPeriod_dto_1 = require("../../company/payrollPeriod/payrollPeriod.dto");
class TimeSegmentInToOutSegmentDTO {
    constructor() {
        this.payrollSegments = [];
    }
}
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The date for the in to out segment. Used to determine which effective dated records apply to these segments',
        format: 'yyyy-MM-dd',
    }),
    __metadata("design:type", String)
], TimeSegmentInToOutSegmentDTO.prototype, "inForDayDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The start datetime of this segment.',
    }),
    __metadata("design:type", Date)
], TimeSegmentInToOutSegmentDTO.prototype, "startDateTimeActual", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The end datetime of this segment.',
    }),
    __metadata("design:type", Date)
], TimeSegmentInToOutSegmentDTO.prototype, "endDateTimeActual", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The start datetime of this segment.',
    }),
    __metadata("design:type", Date)
], TimeSegmentInToOutSegmentDTO.prototype, "startDateTimeRounded", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The end datetime of this segment.',
    }),
    __metadata("design:type", Date)
], TimeSegmentInToOutSegmentDTO.prototype, "endDateTimeRounded", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The payroll date associated with this in to out segment',
    }),
    __metadata("design:type", Date)
], TimeSegmentInToOutSegmentDTO.prototype, "payrollDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The associated payroll period',
    }),
    __metadata("design:type", payrollPeriod_dto_1.PayrollPeriodDTO)
], TimeSegmentInToOutSegmentDTO.prototype, "payrollPeriod", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The associated calculation policy',
    }),
    __metadata("design:type", calculationPolicy_dto_1.CalculationPolicyDTO)
], TimeSegmentInToOutSegmentDTO.prototype, "calculationPolicy", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The associated payroll segments in this In To Out segment',
    }),
    __metadata("design:type", Array)
], TimeSegmentInToOutSegmentDTO.prototype, "payrollSegments", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The punch id for the In For Day record',
    }),
    __metadata("design:type", String)
], TimeSegmentInToOutSegmentDTO.prototype, "inForDayMobilePunchId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Total minutes in the In to Out Segment',
    }),
    __metadata("design:type", Number)
], TimeSegmentInToOutSegmentDTO.prototype, "inToOutTotalMinutesActual", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Total rounded minutes in the In to Out Segment',
    }),
    __metadata("design:type", Number)
], TimeSegmentInToOutSegmentDTO.prototype, "inToOutTotalMinutesRounded", void 0);
exports.TimeSegmentInToOutSegmentDTO = TimeSegmentInToOutSegmentDTO;
//# sourceMappingURL=inToOutSegment.dto.js.map