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
exports.CreatePayrollPeriodDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
const payrollPeriod_enum_1 = require("../../enums/company/payrollPeriod.enum");
class CreatePayrollPeriodDTO {
}
__decorate([
    (0, swagger_1.ApiProperty)({ required: true, description: 'The name of the Pay Period' }),
    __metadata("design:type", String)
], CreatePayrollPeriodDTO.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: true,
        description: 'The description of the Pay Period',
    }),
    __metadata("design:type", String)
], CreatePayrollPeriodDTO.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        isArray: false,
        required: true,
        description: `The type of pay period to create, valid values: ${JSON.stringify(payrollPeriod_enum_1.PayrollPeriodENUM)}`,
        default: payrollPeriod_enum_1.PayrollPeriodENUM.BIWEEKLY,
    }),
    __metadata("design:type", String)
], CreatePayrollPeriodDTO.prototype, "payrollPeriodType", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: true,
        description: 'When the pay period starts',
        format: 'YYYY-MM-DD',
        example: '2022-01-01',
    }),
    __metadata("design:type", String)
], CreatePayrollPeriodDTO.prototype, "startDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: false,
        description: 'A dynamic 2nd date that will be used depending on what Pay Period Type is selected. If SEMIMONTHLY is selected, this will be the day before the 2nd pay period. If custom is choosen, this is the last date of the custom pay period.',
        format: 'YYYY-MM-DD',
        example: '2022-01-15',
    }),
    __metadata("design:type", String)
], CreatePayrollPeriodDTO.prototype, "date2", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: false,
        default: 'now()',
        description: 'Effective date of this record',
    }),
    __metadata("design:type", String)
], CreatePayrollPeriodDTO.prototype, "effectiveDate", void 0);
exports.CreatePayrollPeriodDTO = CreatePayrollPeriodDTO;
//# sourceMappingURL=createPayrollPeriod.dto.js.map