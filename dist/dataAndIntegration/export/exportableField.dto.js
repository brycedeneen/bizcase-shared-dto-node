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
exports.ExportableFieldDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
const dataAndIntegration_1 = require("../../enums/dataAndIntegration");
class ExportableFieldDTO {
}
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'The Id of this Exportable Field' }),
    __metadata("design:type", String)
], ExportableFieldDTO.prototype, "exportableFieldId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: true,
        description: `The integration type this field belongs to ${JSON.stringify(dataAndIntegration_1.IntegrationTypeENUM)}`,
    }),
    __metadata("design:type", String)
], ExportableFieldDTO.prototype, "integrationType", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Internal Field Name' }),
    __metadata("design:type", String)
], ExportableFieldDTO.prototype, "fieldName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Human Readable display name for this field' }),
    __metadata("design:type", String)
], ExportableFieldDTO.prototype, "displayName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: true,
        description: `The type of data for this field ${JSON.stringify(dataAndIntegration_1.FieldTypeENUM)}`,
    }),
    __metadata("design:type", String)
], ExportableFieldDTO.prototype, "fieldType", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Internal format used to parse the object if needed',
    }),
    __metadata("design:type", String)
], ExportableFieldDTO.prototype, "sourceFormat", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Internal flag to define if this field has decimals',
    }),
    __metadata("design:type", Boolean)
], ExportableFieldDTO.prototype, "hasDecimals", void 0);
exports.ExportableFieldDTO = ExportableFieldDTO;
//# sourceMappingURL=exportableField.dto.js.map