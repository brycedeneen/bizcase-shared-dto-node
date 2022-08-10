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
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.PayrollCodeDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
const hoursOrDollarsTypeCode_enum_1 = require("../../enums/company/hoursOrDollarsTypeCode.enum");
const payrollCodeType_enum_1 = require("../../enums/company/payrollCodeType.enum");
const audit_1 = require("../../shared/audit");
class PayrollCodeDTO {
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], PayrollCodeDTO.prototype, "payrollCodeId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: true,
        description: 'The name of the Payroll Code',
    }),
    __metadata("design:type", String)
], PayrollCodeDTO.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: true,
        description: 'The description of this Payroll Code',
    }),
    __metadata("design:type", String)
], PayrollCodeDTO.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        default: payrollCodeType_enum_1.PayrollCodeTypeENUM.REGULAR,
        description: `Payroll Type: ${JSON.stringify(payrollCodeType_enum_1.PayrollCodeTypeENUM)}`,
    }),
    __metadata("design:type", typeof (_a = typeof payrollCodeType_enum_1.PayrollCodeTypeENUM !== "undefined" && payrollCodeType_enum_1.PayrollCodeTypeENUM) === "function" ? _a : Object)
], PayrollCodeDTO.prototype, "payrollCodeType", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        default: hoursOrDollarsTypeCode_enum_1.HoursOrDollarsTypeCode.HOURS,
        description: `Hours or Dollars Type Codes: ${JSON.stringify(hoursOrDollarsTypeCode_enum_1.HoursOrDollarsTypeCode)}`,
    }),
    __metadata("design:type", typeof (_b = typeof hoursOrDollarsTypeCode_enum_1.HoursOrDollarsTypeCode !== "undefined" && hoursOrDollarsTypeCode_enum_1.HoursOrDollarsTypeCode) === "function" ? _b : Object)
], PayrollCodeDTO.prototype, "hoursOrDollars", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Pay Rate Multiplier used for Payroll Calculations',
        default: 1.0,
    }),
    __metadata("design:type", Number)
], PayrollCodeDTO.prototype, "payRateMultiplier", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Include this payroll code in Overtime & Doubletime Calculations',
        default: true,
    }),
    __metadata("design:type", Boolean)
], PayrollCodeDTO.prototype, "includeInOvertimeCalculation", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Include this payroll code in Worked Time Calculations',
        default: true,
    }),
    __metadata("design:type", Boolean)
], PayrollCodeDTO.prototype, "isWorkedPayType", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The priority order in which this payroll code is calculated',
    }),
    __metadata("design:type", Number)
], PayrollCodeDTO.prototype, "calculationPriority", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Is this Payroll Code active',
        default: true,
    }),
    __metadata("design:type", Boolean)
], PayrollCodeDTO.prototype, "isActive", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], PayrollCodeDTO.prototype, "companyId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Effective date of this record' }),
    __metadata("design:type", String)
], PayrollCodeDTO.prototype, "effectiveDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Effective dated records',
        isArray: true,
        required: false,
    }),
    __metadata("design:type", Array)
], PayrollCodeDTO.prototype, "effectiveDatedRecords", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Audit Data',
    }),
    __metadata("design:type", audit_1.AuditV1DTO)
], PayrollCodeDTO.prototype, "auditData", void 0);
exports.PayrollCodeDTO = PayrollCodeDTO;
//# sourceMappingURL=payrollCode.dto.js.map