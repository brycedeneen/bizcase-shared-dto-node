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
exports.IntegrationDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
const dataAndIntegration_1 = require("../../enums/dataAndIntegration");
class IntegrationDTO {
}
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'The Id of this Integration' }),
    __metadata("design:type", String)
], IntegrationDTO.prototype, "integrationId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Name of the integration' }),
    __metadata("design:type", String)
], IntegrationDTO.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Desription of the integration' }),
    __metadata("design:type", String)
], IntegrationDTO.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Is this a standard configuration (aka system delivered)',
    }),
    __metadata("design:type", Boolean)
], IntegrationDTO.prototype, "isStandardConfiguration", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: true,
        description: `The type of integration: ${JSON.stringify(dataAndIntegration_1.IntegrationTypeENUM)}`,
    }),
    __metadata("design:type", String)
], IntegrationDTO.prototype, "integrationType", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: `The file format for this export ${JSON.stringify(dataAndIntegration_1.DownloadTypeENUM)}`,
    }),
    __metadata("design:type", String)
], IntegrationDTO.prototype, "downloadType", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The integration mapping id used to map fields',
    }),
    __metadata("design:type", Array)
], IntegrationDTO.prototype, "integrationMappings", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The id of the connection this integration uses to send data',
    }),
    __metadata("design:type", String)
], IntegrationDTO.prototype, "connectionId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Is this Payroll Code active',
        default: true,
    }),
    __metadata("design:type", Boolean)
], IntegrationDTO.prototype, "isActive", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The id of the Company this Calculation Policy belongs to',
    }),
    __metadata("design:type", String)
], IntegrationDTO.prototype, "companyId", void 0);
exports.IntegrationDTO = IntegrationDTO;
//# sourceMappingURL=integration.dto.js.map