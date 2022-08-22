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
exports.ConceptDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
const concept_1 = require("../../enums/concept");
class ConceptDTO {
}
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Concept Id' }),
    __metadata("design:type", String)
], ConceptDTO.prototype, "conceptId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Name of the concept' }),
    __metadata("design:type", String)
], ConceptDTO.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Description of the concept' }),
    __metadata("design:type", String)
], ConceptDTO.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Is this concept being selected for business case evaluation',
    }),
    __metadata("design:type", String)
], ConceptDTO.prototype, "selectedForBusinessCase", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Is this concept being promoted to a Roadmap item',
    }),
    __metadata("design:type", String)
], ConceptDTO.prototype, "selectedForRoadmap", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The calcualted power score of this concept',
    }),
    __metadata("design:type", Number)
], ConceptDTO.prototype, "calculatedPowerScore", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The calcualted ROI of this concept',
    }),
    __metadata("design:type", Number)
], ConceptDTO.prototype, "calculatedROI", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Number of development weeks to deliver this concept',
    }),
    __metadata("design:type", Number)
], ConceptDTO.prototype, "estimatedDevTimeInWeeks", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Name of the theme associated with this concept',
    }),
    __metadata("design:type", String)
], ConceptDTO.prototype, "themeName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Theme Id associated with this concept',
    }),
    __metadata("design:type", String)
], ConceptDTO.prototype, "themeID", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Incremental Costs associated with this concept (ex: licensing, travel, etc).',
    }),
    __metadata("design:type", Array)
], ConceptDTO.prototype, "conceptIncrementalCosts", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Incremental Hiring associated with this concept (ex: support, marketing, development)',
    }),
    __metadata("design:type", Array)
], ConceptDTO.prototype, "conceptIncrementalHirings", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Incremental Revenue associated with this concept',
    }),
    __metadata("design:type", Array)
], ConceptDTO.prototype, "conceptIncrementalRevenues", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Concept Rankings associated with this concept',
    }),
    __metadata("design:type", Array)
], ConceptDTO.prototype, "conceptRankings", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Segment Override Data associated with this concept',
    }),
    __metadata("design:type", Array)
], ConceptDTO.prototype, "conceptSegments", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Is this concept active',
    }),
    __metadata("design:type", Boolean)
], ConceptDTO.prototype, "isActive", void 0);
exports.ConceptDTO = ConceptDTO;
//# sourceMappingURL=concept.dto.js.map