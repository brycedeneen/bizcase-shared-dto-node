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
exports.DevelopmentCycleDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
class DevelopmentCycleDTO {
}
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Development Cycle Id' }),
    __metadata("design:type", String)
], DevelopmentCycleDTO.prototype, "developmentCycleId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Name of the development cycle',
        example: '2021 Fiscal or 1/1/2030 to 12/31/2031',
    }),
    __metadata("design:type", String)
], DevelopmentCycleDTO.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Start date of the development cycle',
        format: 'yyyy-MM-dd',
        example: '2030-01-01',
    }),
    __metadata("design:type", String)
], DevelopmentCycleDTO.prototype, "startDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'End date of the development cycle',
        format: 'yyyy-MM-dd',
        example: '2030-12-31',
    }),
    __metadata("design:type", String)
], DevelopmentCycleDTO.prototype, "endDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Is this development cycle active',
    }),
    __metadata("design:type", Boolean)
], DevelopmentCycleDTO.prototype, "isActive", void 0);
exports.DevelopmentCycleDTO = DevelopmentCycleDTO;
//# sourceMappingURL=developmentCycle.dto.js.map