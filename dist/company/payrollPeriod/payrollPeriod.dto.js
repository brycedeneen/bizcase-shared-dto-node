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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.PayrollPeriodDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
const payrollPeriod_enum_1 = require("../../enums/company/payrollPeriod.enum");
const audit_1 = require("../../shared/audit");
class PayrollPeriodDTO {
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], PayrollPeriodDTO.prototype, "payrollPeriodId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: true, description: 'The name of the Pay Period' }),
    __metadata("design:type", String)
], PayrollPeriodDTO.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], PayrollPeriodDTO.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        isArray: false,
        required: true,
        description: `The type of pay period to create, valid values: ${JSON.stringify(payrollPeriod_enum_1.PayrollPeriodENUM)}`,
    }),
    __metadata("design:type", typeof (_a = typeof payrollPeriod_enum_1.PayrollPeriodENUM !== "undefined" && payrollPeriod_enum_1.PayrollPeriodENUM) === "function" ? _a : Object)
], PayrollPeriodDTO.prototype, "payPeriodType", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: true, description: 'When the pay period starts' }),
    __metadata("design:type", String)
], PayrollPeriodDTO.prototype, "startDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: false,
        description: 'A dynamic 2nd date that will be used depending on what Pay Period Type is selected. If SEMIMONTHLY is selected, this will be the day before the 2nd pay period. If custom is choosen, this is the last date of the custom pay period.',
    }),
    __metadata("design:type", String)
], PayrollPeriodDTO.prototype, "date2", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    __metadata("design:type", Number)
], PayrollPeriodDTO.prototype, "averageDaysPerPeriod", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Is this Payroll Period active',
        default: true,
    }),
    __metadata("design:type", Boolean)
], PayrollPeriodDTO.prototype, "isActive", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], PayrollPeriodDTO.prototype, "companyId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Effective date of this record' }),
    __metadata("design:type", String)
], PayrollPeriodDTO.prototype, "effectiveDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Effective dated records',
        isArray: true,
        required: false,
    }),
    __metadata("design:type", Array)
], PayrollPeriodDTO.prototype, "effectiveDatedRecords", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Audit Data',
    }),
    __metadata("design:type", audit_1.AuditV1DTO)
], PayrollPeriodDTO.prototype, "auditData", void 0);
exports.PayrollPeriodDTO = PayrollPeriodDTO;
//# sourceMappingURL=payrollPeriod.dto.js.map