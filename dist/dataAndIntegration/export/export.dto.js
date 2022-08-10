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
exports.ExportDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
const dataAndIntegration_1 = require("../../enums/dataAndIntegration");
class ExportDTO {
}
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'The Id of this Export' }),
    __metadata("design:type", String)
], ExportDTO.prototype, "exportId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'If this is a file based export, the s3 File Location to downlaod this file (may be a 1 time use download link)',
    }),
    __metadata("design:type", String)
], ExportDTO.prototype, "s3FileLocation", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: true,
        description: `The processing status of this export ${JSON.stringify(dataAndIntegration_1.ProcessStatusENUM)}`,
    }),
    __metadata("design:type", String)
], ExportDTO.prototype, "processStatus", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'If this is a payroll export, the Payroll Period Segment Id of the export',
    }),
    __metadata("design:type", String)
], ExportDTO.prototype, "payrollPeriodSegmentId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'If this is a payroll export, the Payroll Period Id of the export',
    }),
    __metadata("design:type", String)
], ExportDTO.prototype, "payrollPeriodId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The Integration Id of the export',
    }),
    __metadata("design:type", String)
], ExportDTO.prototype, "integrationId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The Company Id of the export',
    }),
    __metadata("design:type", String)
], ExportDTO.prototype, "companyId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The User Id of the user who ran this export',
    }),
    __metadata("design:type", String)
], ExportDTO.prototype, "userId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The date the export was run',
    }),
    __metadata("design:type", Date)
], ExportDTO.prototype, "createdDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The last date the export record was update (usually the last time the status was changed)',
    }),
    __metadata("design:type", Date)
], ExportDTO.prototype, "updatedDate", void 0);
exports.ExportDTO = ExportDTO;
//# sourceMappingURL=export.dto.js.map