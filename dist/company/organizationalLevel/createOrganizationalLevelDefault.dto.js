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
exports.CreateOrganizationLevelDefaultDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
class CreateOrganizationLevelDefaultDTO {
    constructor(division, region, location, department) {
        this.division = division !== null && division !== void 0 ? division : true;
        this.region = region !== null && region !== void 0 ? region : true;
        this.location = location !== null && location !== void 0 ? location : true;
        this.department = department !== null && department !== void 0 ? department : true;
    }
}
__decorate([
    (0, swagger_1.ApiProperty)({
        required: false,
        description: 'Create Division Org Level',
    }),
    __metadata("design:type", Boolean)
], CreateOrganizationLevelDefaultDTO.prototype, "division", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: false,
        description: 'Create Region Org Level',
    }),
    __metadata("design:type", Boolean)
], CreateOrganizationLevelDefaultDTO.prototype, "region", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: false,
        description: 'Create Location Org Level',
    }),
    __metadata("design:type", Boolean)
], CreateOrganizationLevelDefaultDTO.prototype, "location", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: false,
        description: 'Create Department Org Level',
    }),
    __metadata("design:type", Boolean)
], CreateOrganizationLevelDefaultDTO.prototype, "department", void 0);
exports.CreateOrganizationLevelDefaultDTO = CreateOrganizationLevelDefaultDTO;
//# sourceMappingURL=createOrganizationalLevelDefault.dto.js.map