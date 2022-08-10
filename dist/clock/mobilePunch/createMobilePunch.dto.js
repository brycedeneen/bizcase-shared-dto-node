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
exports.CreateMobilePunchDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
const clock_1 = require("../../enums/clock");
class CreateMobilePunchDTO {
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Date)
], CreateMobilePunchDTO.prototype, "sourcePunchDateTime", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Date)
], CreateMobilePunchDTO.prototype, "punchDateTime", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CreateMobilePunchDTO.prototype, "mobilePunchCorrectionId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Boolean)
], CreateMobilePunchDTO.prototype, "isMissingPunch", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Boolean)
], CreateMobilePunchDTO.prototype, "isPunchCorrection", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        default: clock_1.PunchTypeENUM.SWIPEANDGO,
        description: `Punch Type: ${JSON.stringify(clock_1.PunchTypeENUM)}`,
    }),
    __metadata("design:type", String)
], CreateMobilePunchDTO.prototype, "punchType", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The id for the employee',
    }),
    __metadata("design:type", String)
], CreateMobilePunchDTO.prototype, "employeeId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The id for the employees company',
    }),
    __metadata("design:type", String)
], CreateMobilePunchDTO.prototype, "companyId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The identifier for the employee (example EmployeeId, Badge, Employee Numberr, etc.',
    }),
    __metadata("design:type", String)
], CreateMobilePunchDTO.prototype, "employeeIdentification", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The identifier for the company (example CompanyId or Company Code.',
    }),
    __metadata("design:type", String)
], CreateMobilePunchDTO.prototype, "companyIdentification", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The latitude of the punch.',
    }),
    __metadata("design:type", Number)
], CreateMobilePunchDTO.prototype, "latitude", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The latitude of the punch.',
    }),
    __metadata("design:type", Number)
], CreateMobilePunchDTO.prototype, "longitude", void 0);
exports.CreateMobilePunchDTO = CreateMobilePunchDTO;
//# sourceMappingURL=createMobilePunch.dto.js.map