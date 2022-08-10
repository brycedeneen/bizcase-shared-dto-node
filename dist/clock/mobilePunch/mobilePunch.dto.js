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
exports.MobilePunchDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
const clock_1 = require("../../enums/clock");
class MobilePunchDTO {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The id of the mobile punch record',
    }),
    __metadata("design:type", String)
], MobilePunchDTO.prototype, "mobilePunchId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Date)
], MobilePunchDTO.prototype, "sourcePunchDateTime", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Date)
], MobilePunchDTO.prototype, "serverPunchDateTime", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Date)
], MobilePunchDTO.prototype, "punchDateTime", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Boolean)
], MobilePunchDTO.prototype, "isMissingPunch", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Boolean)
], MobilePunchDTO.prototype, "isPunchCorrection", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], MobilePunchDTO.prototype, "mobilePunchCorrectionId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        default: clock_1.PunchTypeENUM.SWIPEANDGO,
        description: `Punch Type: ${JSON.stringify(clock_1.PunchTypeENUM)}`,
    }),
    __metadata("design:type", String)
], MobilePunchDTO.prototype, "punchType", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Submitted Punch Corrections for this punch',
        isArray: true,
    }),
    __metadata("design:type", Array)
], MobilePunchDTO.prototype, "punchCorrections", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The id for the user',
    }),
    __metadata("design:type", String)
], MobilePunchDTO.prototype, "userId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The In For Day Punch Id that relates to this punch',
    }),
    __metadata("design:type", String)
], MobilePunchDTO.prototype, "inForDaySegmentPunchId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The id for the employee',
    }),
    __metadata("design:type", String)
], MobilePunchDTO.prototype, "employeeId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The id for the employees company',
    }),
    __metadata("design:type", String)
], MobilePunchDTO.prototype, "companyId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The identifier for the employee (example EmployeeId, Badge, Employee Numberr, etc.',
    }),
    __metadata("design:type", String)
], MobilePunchDTO.prototype, "employeeIdentification", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The identifier for the company (example CompanyId or Company Code.',
    }),
    __metadata("design:type", String)
], MobilePunchDTO.prototype, "companyIdentification", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The latitude of the punch.',
    }),
    __metadata("design:type", Number)
], MobilePunchDTO.prototype, "latitude", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The latitude of the punch.',
    }),
    __metadata("design:type", Number)
], MobilePunchDTO.prototype, "longitude", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Is the punch approved',
    }),
    __metadata("design:type", Boolean)
], MobilePunchDTO.prototype, "isApproved", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Is the punch locked for edits',
    }),
    __metadata("design:type", Boolean)
], MobilePunchDTO.prototype, "isLocked", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Is the punch processed',
    }),
    __metadata("design:type", Boolean)
], MobilePunchDTO.prototype, "isProcessed", void 0);
exports.MobilePunchDTO = MobilePunchDTO;
//# sourceMappingURL=mobilePunch.dto.js.map