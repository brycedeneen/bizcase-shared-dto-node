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
exports.FTEDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
const company_1 = require("../../enums/company");
class FTEDTO {
}
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'FTE Id' }),
    __metadata("design:type", String)
], FTEDTO.prototype, "fteId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Name of this FTE Type',
        example: 'Developer / Engineer',
    }),
    __metadata("design:type", String)
], FTEDTO.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Should this FTE type be included in a teams composition (and be part of the associated cost and ROI calculatons',
        default: true,
    }),
    __metadata("design:type", Boolean)
], FTEDTO.prototype, "includeInTeamComposition", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The average fully loaded cost of an onshore team member (salary, bonus, benefits, etc) for this FTE type (average cost is across your whole organization)',
    }),
    __metadata("design:type", Number)
], FTEDTO.prototype, "onshoreAVGCosts", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The average fully loaded cost of an onshore team member  (salary, bonus, benefits, etc) for this FTE type (average cost is across your whole organization)',
    }),
    __metadata("design:type", Number)
], FTEDTO.prototype, "offshoreAVGCosts", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: `The type or category of this FTE: ${JSON.stringify(company_1.FTETypeENUM)}`,
    }),
    __metadata("design:type", String)
], FTEDTO.prototype, "fteType", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Is this FTE active',
    }),
    __metadata("design:type", Boolean)
], FTEDTO.prototype, "isActive", void 0);
exports.FTEDTO = FTEDTO;
//# sourceMappingURL=fte.dto.js.map