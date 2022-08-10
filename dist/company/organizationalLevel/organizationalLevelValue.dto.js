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
exports.OrganizationLevelValueDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
class OrganizationLevelValueDTO {
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], OrganizationLevelValueDTO.prototype, "organizationLevelValueId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: true,
        description: 'The value of the Organizational Level Value',
    }),
    __metadata("design:type", String)
], OrganizationLevelValueDTO.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: true,
        description: 'The description of this Organizational Level Value',
    }),
    __metadata("design:type", String)
], OrganizationLevelValueDTO.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Is this Organizational Level Value active',
    }),
    __metadata("design:type", Boolean)
], OrganizationLevelValueDTO.prototype, "isActive", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], OrganizationLevelValueDTO.prototype, "companyId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], OrganizationLevelValueDTO.prototype, "organizationLevelId", void 0);
exports.OrganizationLevelValueDTO = OrganizationLevelValueDTO;
//# sourceMappingURL=organizationalLevelValue.dto.js.map