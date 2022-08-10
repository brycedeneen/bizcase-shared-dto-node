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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateCalculationPolicyQualifierDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
const calculation_1 = require("../../enums/calculation");
class UpdateCalculationPolicyQualifierDTO {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        default: calculation_1.QualifierTypeENUM.MINIMUMMINUTESWORKEDWEEK,
        description: `Qualifier Type: ${JSON.stringify(calculation_1.QualifierTypeENUM)}`,
    }),
    __metadata("design:type", typeof (_a = typeof calculation_1.QualifierTypeENUM !== "undefined" && calculation_1.QualifierTypeENUM) === "function" ? _a : Object)
], UpdateCalculationPolicyQualifierDTO.prototype, "qualifierType", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The value associated with this qualifier (ex: 120 for minimum minutes worked',
    }),
    __metadata("design:type", Number)
], UpdateCalculationPolicyQualifierDTO.prototype, "qualifierValue", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The order of this qualifier',
    }),
    __metadata("design:type", Number)
], UpdateCalculationPolicyQualifierDTO.prototype, "order", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Effective date of this record' }),
    __metadata("design:type", String)
], UpdateCalculationPolicyQualifierDTO.prototype, "effectiveDate", void 0);
exports.UpdateCalculationPolicyQualifierDTO = UpdateCalculationPolicyQualifierDTO;
//# sourceMappingURL=updateCalculationPolicyQualifier.dto.js.map