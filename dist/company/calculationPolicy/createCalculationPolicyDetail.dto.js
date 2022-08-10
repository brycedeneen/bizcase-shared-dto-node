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
exports.CreateCalculationPolicyDetailDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
class CreateCalculationPolicyDetailDTO {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The name of this Calculation Policy Detail',
    }),
    __metadata("design:type", String)
], CreateCalculationPolicyDetailDTO.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The description of this Calculation Policy Detail',
    }),
    __metadata("design:type", String)
], CreateCalculationPolicyDetailDTO.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The id of this Calculation Policy Detail',
    }),
    __metadata("design:type", Number)
], CreateCalculationPolicyDetailDTO.prototype, "order", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Effective date of this record' }),
    __metadata("design:type", String)
], CreateCalculationPolicyDetailDTO.prototype, "effectiveDate", void 0);
exports.CreateCalculationPolicyDetailDTO = CreateCalculationPolicyDetailDTO;
//# sourceMappingURL=createCalculationPolicyDetail.dto.js.map