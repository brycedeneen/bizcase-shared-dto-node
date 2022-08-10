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
exports.PayrollExportDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
class PayrollExportDTO {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Company Id',
    }),
    __metadata("design:type", String)
], PayrollExportDTO.prototype, "companyId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Employee Id',
    }),
    __metadata("design:type", String)
], PayrollExportDTO.prototype, "employeeId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Employee Name',
    }),
    __metadata("design:type", String)
], PayrollExportDTO.prototype, "employeeName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Employee Number',
    }),
    __metadata("design:type", String)
], PayrollExportDTO.prototype, "employeeNumber", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Employee Badge',
    }),
    __metadata("design:type", String)
], PayrollExportDTO.prototype, "employeeBadge", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Payroll Period Id',
    }),
    __metadata("design:type", String)
], PayrollExportDTO.prototype, "payrollPeriodId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Payroll Period Name',
    }),
    __metadata("design:type", String)
], PayrollExportDTO.prototype, "payrollPeriodName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Payroll Period Start Date',
        format: 'yyyy-MM-dd',
    }),
    __metadata("design:type", String)
], PayrollExportDTO.prototype, "payrollPeriodStartDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Payroll Period End Date',
        format: 'yyyy-MM-dd',
    }),
    __metadata("design:type", String)
], PayrollExportDTO.prototype, "payrollPeriodEndDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'FLSA Pay Week Start Date',
        format: 'yyyy-MM-dd',
    }),
    __metadata("design:type", String)
], PayrollExportDTO.prototype, "flsaPayWeekStartDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'FLSA Pay Week End Date',
        format: 'yyyy-MM-dd',
    }),
    __metadata("design:type", String)
], PayrollExportDTO.prototype, "flsaPayWeekEndDate", void 0);
exports.PayrollExportDTO = PayrollExportDTO;
//# sourceMappingURL=payrollExport.dto.js.map