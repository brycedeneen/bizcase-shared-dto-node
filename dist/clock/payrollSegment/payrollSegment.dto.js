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
exports.PayrollSegmentDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
const payrollCode_1 = require("../../company/payrollCode");
const mobilePunch_1 = require("../mobilePunch");
class PayrollSegmentDTO {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'A string key to identify the payroll date of this payroll segment (ex: "2022-01-02")',
    }),
    __metadata("design:type", String)
], PayrollSegmentDTO.prototype, "payrollDateKey", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'The payroll date of this payroll segment' }),
    __metadata("design:type", Date)
], PayrollSegmentDTO.prototype, "payrollDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'The start punch related to this segment' }),
    __metadata("design:type", mobilePunch_1.MobilePunchV1DTO)
], PayrollSegmentDTO.prototype, "startPunch", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'The end punch related to this segment' }),
    __metadata("design:type", mobilePunch_1.MobilePunchV1DTO)
], PayrollSegmentDTO.prototype, "endPunch", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'How long the segment is in minutes' }),
    __metadata("design:type", Number)
], PayrollSegmentDTO.prototype, "segmentLengthMinutes", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The payroll code associated with this segment (ex: Regular, overtime etc)',
    }),
    __metadata("design:type", payrollCode_1.PayrollCodeV1DTO)
], PayrollSegmentDTO.prototype, "payrollCode", void 0);
exports.PayrollSegmentDTO = PayrollSegmentDTO;
//# sourceMappingURL=payrollSegment.dto.js.map