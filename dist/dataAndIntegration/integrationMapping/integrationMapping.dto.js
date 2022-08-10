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
exports.IntegrationMappingDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
const dataAndIntegration_1 = require("../../enums/dataAndIntegration");
const audit_1 = require("../../shared/audit");
class IntegrationMappingDTO {
}
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Download Configuration Id' }),
    __metadata("design:type", String)
], IntegrationMappingDTO.prototype, "integrationMappingId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: true,
        description: `The Data Object related to this integration mapping  ${JSON.stringify(dataAndIntegration_1.DataObjectENUM)}`,
    }),
    __metadata("design:type", String)
], IntegrationMappingDTO.prototype, "dataObject", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The list of included fields in the download configuration',
        isArray: true,
    }),
    __metadata("design:type", Array)
], IntegrationMappingDTO.prototype, "integrationMappingFields", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Is this field mapping active',
        default: true,
    }),
    __metadata("design:type", Boolean)
], IntegrationMappingDTO.prototype, "isActive", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], IntegrationMappingDTO.prototype, "companyId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Audit Data',
    }),
    __metadata("design:type", audit_1.AuditV1DTO)
], IntegrationMappingDTO.prototype, "auditData", void 0);
exports.IntegrationMappingDTO = IntegrationMappingDTO;
//# sourceMappingURL=integrationMapping.dto.js.map