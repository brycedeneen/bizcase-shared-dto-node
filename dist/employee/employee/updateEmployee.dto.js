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
exports.UpdateEmployeeDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
const person_1 = require("../../shared/person");
class UpdateEmployeeDTO {
}
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Employee Number' }),
    __metadata("design:type", String)
], UpdateEmployeeDTO.prototype, "employeeNumber", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Employee Badge' }),
    __metadata("design:type", String)
], UpdateEmployeeDTO.prototype, "badgeNumber", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Calculation Policy Id' }),
    __metadata("design:type", String)
], UpdateEmployeeDTO.prototype, "calculationPolicyId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Payroll Period Id' }),
    __metadata("design:type", String)
], UpdateEmployeeDTO.prototype, "payrollPeriodId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Is this a test employee', default: false }),
    __metadata("design:type", Boolean)
], UpdateEmployeeDTO.prototype, "isTestEmployee", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Person Details' }),
    __metadata("design:type", person_1.UpdatePersonV1DTO)
], UpdateEmployeeDTO.prototype, "person", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'When this record goes into effect',
        format: 'yyyy-MM-dd',
    }),
    __metadata("design:type", String)
], UpdateEmployeeDTO.prototype, "effectiveDate", void 0);
exports.UpdateEmployeeDTO = UpdateEmployeeDTO;
//# sourceMappingURL=updateEmployee.dto.js.map