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
exports.CalculationPolicyDetailDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
const company_1 = require("../../enums/company");
const audit_1 = require("../../shared/audit");
class CalculationPolicyDetailDTO {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The id of this Calculation Policy Detail',
    }),
    __metadata("design:type", String)
], CalculationPolicyDetailDTO.prototype, "calculationPolicyDetailId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The name of this Calculation Policy Detail',
    }),
    __metadata("design:type", String)
], CalculationPolicyDetailDTO.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The description of this Calculation Policy Detail',
    }),
    __metadata("design:type", String)
], CalculationPolicyDetailDTO.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The id of this Calculation Policy Detail',
    }),
    __metadata("design:type", Number)
], CalculationPolicyDetailDTO.prototype, "order", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: `If this is a standard calculation policy rule, which rule is it: ${JSON.stringify(company_1.StandardCalculationPolicyRuleENUM)}`,
    }),
    __metadata("design:type", typeof (_a = typeof company_1.StandardCalculationPolicyRuleENUM !== "undefined" && company_1.StandardCalculationPolicyRuleENUM) === "function" ? _a : Object)
], CalculationPolicyDetailDTO.prototype, "standardCalculationPolicyRule", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Qualifiers associated with this Calculation Policy Detail',
    }),
    __metadata("design:type", Array)
], CalculationPolicyDetailDTO.prototype, "calculationPolicyQualifiers", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Receives associated with this Calculation Policy Detail',
    }),
    __metadata("design:type", Array)
], CalculationPolicyDetailDTO.prototype, "calculationPolicyReceives", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The id of the Calculation Policy this Calculation Policy Detail belongs to',
    }),
    __metadata("design:type", String)
], CalculationPolicyDetailDTO.prototype, "calculationPolicyId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Is this Calculation Policy Detail active',
        default: true,
    }),
    __metadata("design:type", Boolean)
], CalculationPolicyDetailDTO.prototype, "isActive", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The id of the Company this Calculation Policy Detail belongs to',
    }),
    __metadata("design:type", String)
], CalculationPolicyDetailDTO.prototype, "companyId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Effective date of this record' }),
    __metadata("design:type", String)
], CalculationPolicyDetailDTO.prototype, "effectiveDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Effective dated records',
        isArray: true,
        required: false,
    }),
    __metadata("design:type", Array)
], CalculationPolicyDetailDTO.prototype, "effectiveDatedRecords", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Audit Data',
    }),
    __metadata("design:type", audit_1.AuditV1DTO)
], CalculationPolicyDetailDTO.prototype, "auditData", void 0);
exports.CalculationPolicyDetailDTO = CalculationPolicyDetailDTO;
//# sourceMappingURL=calculationPolicyDetail.dto.js.map