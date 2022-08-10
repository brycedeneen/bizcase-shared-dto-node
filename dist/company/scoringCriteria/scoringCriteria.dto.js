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
exports.ScoringCriteriaDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
class ScoringCriteriaDTO {
}
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Scoring Criteria Id' }),
    __metadata("design:type", String)
], ScoringCriteriaDTO.prototype, "scoringCriteriaId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Name of the Scoring Criteria' }),
    __metadata("design:type", String)
], ScoringCriteriaDTO.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Description of the Scoring Criteria' }),
    __metadata("design:type", String)
], ScoringCriteriaDTO.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The weight of this scoring criteria versus the other criteria, usually a percentage. The system will take the total weights across all scoring criteria and establish a final ratio.',
    }),
    __metadata("design:type", Number)
], ScoringCriteriaDTO.prototype, "weight", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The number of unique criteria that will be associated with this Scoring Criteria.',
        default: 5,
    }),
    __metadata("design:type", Number)
], ScoringCriteriaDTO.prototype, "numberOfCriteria", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The value or range associated with the lowest scored scoring criteria.',
        example: '<$1M',
    }),
    __metadata("design:type", String)
], ScoringCriteriaDTO.prototype, "criteria1", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The value or range associated with the second 3rd scoring criteria.',
        example: '$1M-$2M',
    }),
    __metadata("design:type", String)
], ScoringCriteriaDTO.prototype, "criteria2", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The value or range associated with the lowest 4th scoring criteria.',
        example: '$2M-$3m',
    }),
    __metadata("design:type", String)
], ScoringCriteriaDTO.prototype, "criteria3", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The value or range associated with the second 5th scoring criteria.',
    }),
    __metadata("design:type", String)
], ScoringCriteriaDTO.prototype, "criteria4", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The value or range associated with the second 6th scoring criteria.',
    }),
    __metadata("design:type", String)
], ScoringCriteriaDTO.prototype, "criteria5", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The value or range associated with the second 7th scoring criteria.',
    }),
    __metadata("design:type", String)
], ScoringCriteriaDTO.prototype, "criteria6", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The value or range associated with the second 8th scoring criteria.',
    }),
    __metadata("design:type", String)
], ScoringCriteriaDTO.prototype, "criteria7", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The value or range associated with the second 9th scoring criteria.',
    }),
    __metadata("design:type", String)
], ScoringCriteriaDTO.prototype, "criteria8", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The value or range associated with the second 10th scoring criteria.',
    }),
    __metadata("design:type", String)
], ScoringCriteriaDTO.prototype, "criteria9", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The value or range associated with the second lowest scoring criteria.',
    }),
    __metadata("design:type", String)
], ScoringCriteriaDTO.prototype, "criteria10", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Is this theme active',
    }),
    __metadata("design:type", Boolean)
], ScoringCriteriaDTO.prototype, "isActive", void 0);
exports.ScoringCriteriaDTO = ScoringCriteriaDTO;
//# sourceMappingURL=scoringCriteria.dto.js.map