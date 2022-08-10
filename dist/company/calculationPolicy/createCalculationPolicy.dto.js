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
exports.CreateCalculationPolicyDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
const company_1 = require("../../enums/company");
const shared_1 = require("../../enums/shared");
class CreateCalculationPolicyDTO {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The name of the Calculation Policy',
    }),
    __metadata("design:type", String)
], CreateCalculationPolicyDTO.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The description of the Calculation Policy',
    }),
    __metadata("design:type", String)
], CreateCalculationPolicyDTO.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: `What day of the week does this calculation policy use to calculate OT/DT (usually Sunday or Monday). ${JSON.stringify(shared_1.WeekDayENUM)}`,
    }),
    __metadata("design:type", typeof (_a = typeof shared_1.WeekDayENUM !== "undefined" && shared_1.WeekDayENUM) === "function" ? _a : Object)
], CreateCalculationPolicyDTO.prototype, "startDayOfWeek", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: `The rule used to determine the payroll date of a punch segment. ${JSON.stringify(company_1.PayrollDateBasisENUM)}`,
    }),
    __metadata("design:type", typeof (_b = typeof company_1.PayrollDateBasisENUM !== "undefined" && company_1.PayrollDateBasisENUM) === "function" ? _b : Object)
], CreateCalculationPolicyDTO.prototype, "payrollDateBasis", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Effective date of this record' }),
    __metadata("design:type", String)
], CreateCalculationPolicyDTO.prototype, "effectiveDate", void 0);
exports.CreateCalculationPolicyDTO = CreateCalculationPolicyDTO;
//# sourceMappingURL=createCalculationPolicy.dto.js.map