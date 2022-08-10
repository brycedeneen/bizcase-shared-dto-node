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
exports.EmployeeDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
const person_1 = require("../../shared/person");
class EmployeeDTO {
}
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Employee Id' }),
    __metadata("design:type", String)
], EmployeeDTO.prototype, "employeeId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Employee Number' }),
    __metadata("design:type", String)
], EmployeeDTO.prototype, "employeeNumber", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Employee Badge' }),
    __metadata("design:type", String)
], EmployeeDTO.prototype, "badgeNumber", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Calculation Policy Id' }),
    __metadata("design:type", String)
], EmployeeDTO.prototype, "calculationPolicyId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Payroll Period Id' }),
    __metadata("design:type", String)
], EmployeeDTO.prototype, "payrollPeriodId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Company Id' }),
    __metadata("design:type", String)
], EmployeeDTO.prototype, "companyId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'User Id' }),
    __metadata("design:type", String)
], EmployeeDTO.prototype, "userId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Person Id' }),
    __metadata("design:type", String)
], EmployeeDTO.prototype, "personId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Person Details' }),
    __metadata("design:type", person_1.PersonV1DTO)
], EmployeeDTO.prototype, "person", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Is this a test employee', default: false }),
    __metadata("design:type", Boolean)
], EmployeeDTO.prototype, "isTestEmployee", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Is this Company active',
    }),
    __metadata("design:type", Boolean)
], EmployeeDTO.prototype, "isActive", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'When this record goes into effect',
        format: 'yyyy-MM-dd',
    }),
    __metadata("design:type", String)
], EmployeeDTO.prototype, "effectiveDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Effective dated records',
        isArray: true,
        required: false,
    }),
    __metadata("design:type", Array)
], EmployeeDTO.prototype, "effectiveDatedRecords", void 0);
exports.EmployeeDTO = EmployeeDTO;
//# sourceMappingURL=employee.dto.js.map