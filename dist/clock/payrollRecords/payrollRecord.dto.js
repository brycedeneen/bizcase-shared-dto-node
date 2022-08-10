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
exports.PayrollRecordDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
const audit_1 = require("../../shared/audit");
class PayrollRecordDTO {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The record id for this Payroll Record',
    }),
    __metadata("design:type", String)
], PayrollRecordDTO.prototype, "payrollRecordId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The payroll date of this recrd',
    }),
    __metadata("design:type", Date)
], PayrollRecordDTO.prototype, "payrollDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Was this record added by the HR team',
    }),
    __metadata("design:type", Boolean)
], PayrollRecordDTO.prototype, "isAddedByHR", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Is the record considered worked time',
    }),
    __metadata("design:type", Boolean)
], PayrollRecordDTO.prototype, "isWorkedTime", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Is the record approved',
    }),
    __metadata("design:type", Boolean)
], PayrollRecordDTO.prototype, "isApproved", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Is the record locked from editing (must be unlocked before it can be edited)',
    }),
    __metadata("design:type", Boolean)
], PayrollRecordDTO.prototype, "isLocked", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Has this record been processed',
    }),
    __metadata("design:type", Boolean)
], PayrollRecordDTO.prototype, "isProcessed", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The length of time associated with this payroll record in minutes',
        default: 0,
        example: 240,
    }),
    __metadata("design:type", Number)
], PayrollRecordDTO.prototype, "totalSegmentLengthMinutes", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The pay rate associated with this payroll record',
        default: 0,
        example: 15.25,
    }),
    __metadata("design:type", Number)
], PayrollRecordDTO.prototype, "payRate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The dollars associated with this payroll record',
        default: 0,
        example: 45.23,
    }),
    __metadata("design:type", Number)
], PayrollRecordDTO.prototype, "segmentDollars", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The payroll code id related to this Payroll Record',
    }),
    __metadata("design:type", String)
], PayrollRecordDTO.prototype, "payrollCodeId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The payroll period id related to this Payroll Record',
    }),
    __metadata("design:type", String)
], PayrollRecordDTO.prototype, "payrollPeriodId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The payroll period segment id related to this Payroll Record',
    }),
    __metadata("design:type", String)
], PayrollRecordDTO.prototype, "payrollPeriodSegmentId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The in for day segment id related to this Payroll Record',
    }),
    __metadata("design:type", String)
], PayrollRecordDTO.prototype, "inForDaySegmentPunchId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The employeeid of the employee this Payroll Record belongs to',
    }),
    __metadata("design:type", String)
], PayrollRecordDTO.prototype, "employeeId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The userid of the employee this Payroll Record belongs to',
    }),
    __metadata("design:type", String)
], PayrollRecordDTO.prototype, "userId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Employee Name',
    }),
    __metadata("design:type", String)
], PayrollRecordDTO.prototype, "employeeName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Employee Number',
    }),
    __metadata("design:type", String)
], PayrollRecordDTO.prototype, "employeeNumber", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Employee Badge',
    }),
    __metadata("design:type", String)
], PayrollRecordDTO.prototype, "employeeBadge", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Is this Payroll Record active',
        default: true,
    }),
    __metadata("design:type", Boolean)
], PayrollRecordDTO.prototype, "isActive", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The id of the company this Payroll Record belongs to',
    }),
    __metadata("design:type", String)
], PayrollRecordDTO.prototype, "companyId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Audit Data',
    }),
    __metadata("design:type", audit_1.AuditV1DTO)
], PayrollRecordDTO.prototype, "auditData", void 0);
exports.PayrollRecordDTO = PayrollRecordDTO;
//# sourceMappingURL=payrollRecord.dto.js.map