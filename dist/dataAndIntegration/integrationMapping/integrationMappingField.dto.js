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
exports.IntegrationMappingFieldDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
const fieldType_enum_1 = require("../../enums/dataAndIntegration/fieldType.enum");
const audit_1 = require("../../shared/audit");
class IntegrationMappingFieldDTO {
}
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Integration Mapping Field Id' }),
    __metadata("design:type", String)
], IntegrationMappingFieldDTO.prototype, "integrationMappingFieldId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'The name of this field from the data object' }),
    __metadata("design:type", String)
], IntegrationMappingFieldDTO.prototype, "fieldName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The name of the field that will be output in extract',
    }),
    __metadata("design:type", String)
], IntegrationMappingFieldDTO.prototype, "outputField", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: true,
        description: `The type of data for this field ${JSON.stringify(fieldType_enum_1.FieldTypeENUM)}`,
    }),
    __metadata("design:type", String)
], IntegrationMappingFieldDTO.prototype, "fieldType", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'A format string used for displaying data',
    }),
    __metadata("design:type", String)
], IntegrationMappingFieldDTO.prototype, "sourceFormat", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'A string used for define the data format',
    }),
    __metadata("design:type", String)
], IntegrationMappingFieldDTO.prototype, "outputFormat", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The number of decimals for numerical values',
    }),
    __metadata("design:type", Number)
], IntegrationMappingFieldDTO.prototype, "displayDecimals", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The order this field will appear in the export',
    }),
    __metadata("design:type", Number)
], IntegrationMappingFieldDTO.prototype, "fieldOrder", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Is this integration mapping field active',
        default: true,
    }),
    __metadata("design:type", Boolean)
], IntegrationMappingFieldDTO.prototype, "isActive", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], IntegrationMappingFieldDTO.prototype, "companyId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Integration Id' }),
    __metadata("design:type", String)
], IntegrationMappingFieldDTO.prototype, "integrationId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Integration Mapping Id' }),
    __metadata("design:type", String)
], IntegrationMappingFieldDTO.prototype, "integrationMappingId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Audit Data',
    }),
    __metadata("design:type", audit_1.AuditV1DTO)
], IntegrationMappingFieldDTO.prototype, "auditData", void 0);
exports.IntegrationMappingFieldDTO = IntegrationMappingFieldDTO;
//# sourceMappingURL=integrationMappingField.dto.js.map