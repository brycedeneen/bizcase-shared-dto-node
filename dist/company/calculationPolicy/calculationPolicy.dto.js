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
exports.CalculationPolicyDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
const company_1 = require("../../enums/company");
const shared_1 = require("../../enums/shared");
const audit_1 = require("../../shared/audit");
class CalculationPolicyDTO {
}
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'The ID of this Calculation Policy' }),
    __metadata("design:type", String)
], CalculationPolicyDTO.prototype, "calculationPolicyId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The name of the Calculation Policy',
    }),
    __metadata("design:type", String)
], CalculationPolicyDTO.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The description of the Calculation Policy',
    }),
    __metadata("design:type", String)
], CalculationPolicyDTO.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: `What day of the week does this calculation policy use to calculate OT/DT (usually Sunday or Monday). ${JSON.stringify(shared_1.WeekDayENUM)}`,
    }),
    __metadata("design:type", typeof (_a = typeof shared_1.WeekDayENUM !== "undefined" && shared_1.WeekDayENUM) === "function" ? _a : Object)
], CalculationPolicyDTO.prototype, "startDayOfWeek", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: `The rule used to determine the payroll date of a punch segment. ${JSON.stringify(company_1.PayrollDateBasisENUM)}`,
    }),
    __metadata("design:type", typeof (_b = typeof company_1.PayrollDateBasisENUM !== "undefined" && company_1.PayrollDateBasisENUM) === "function" ? _b : Object)
], CalculationPolicyDTO.prototype, "payrollDateBasis", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'What day of the week does this calculation policy use to calculate OT/DT (usually Sunday or Monday)',
    }),
    __metadata("design:type", Array)
], CalculationPolicyDTO.prototype, "calculationPolicyDetails", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Is this Calculation Policy active',
        default: true,
    }),
    __metadata("design:type", Boolean)
], CalculationPolicyDTO.prototype, "isActive", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The id of the company this Calculation Policy belongs to',
    }),
    __metadata("design:type", String)
], CalculationPolicyDTO.prototype, "companyId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Effective date of this record' }),
    __metadata("design:type", String)
], CalculationPolicyDTO.prototype, "effectiveDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Effective dated records',
        isArray: true,
        required: false,
    }),
    __metadata("design:type", Array)
], CalculationPolicyDTO.prototype, "effectiveDatedRecords", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Audit Data',
    }),
    __metadata("design:type", audit_1.AuditV1DTO)
], CalculationPolicyDTO.prototype, "auditData", void 0);
exports.CalculationPolicyDTO = CalculationPolicyDTO;
//# sourceMappingURL=calculationPolicy.dto.js.map