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
exports.CreateConceptIncrementalHiringDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
class CreateConceptIncrementalHiringDTO {
}
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Segment Incremental Hiring Id' }),
    __metadata("design:type", String)
], CreateConceptIncrementalHiringDTO.prototype, "segmentIncrementalHiringId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'The number of incremental FTEs in Year 1', example: 3 }),
    __metadata("design:type", Number)
], CreateConceptIncrementalHiringDTO.prototype, "onShoreCountY1", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'The number of incremental FTEs in Year 2', example: 2 }),
    __metadata("design:type", Number)
], CreateConceptIncrementalHiringDTO.prototype, "onShoreCountY2", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'The number of incremental FTEs in Year 3', example: 1 }),
    __metadata("design:type", Number)
], CreateConceptIncrementalHiringDTO.prototype, "onShoreCountY3", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'The number of incremental FTEs in Year 1', example: 3 }),
    __metadata("design:type", Number)
], CreateConceptIncrementalHiringDTO.prototype, "offShoreCountY1", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'The number of incremental FTEs in Year 2', example: 2 }),
    __metadata("design:type", Number)
], CreateConceptIncrementalHiringDTO.prototype, "offShoreCountY2", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'The number of incremental FTEs in Year 3', example: 1 }),
    __metadata("design:type", Number)
], CreateConceptIncrementalHiringDTO.prototype, "offShoreCountY3", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'The ID of the FTE be added' }),
    __metadata("design:type", String)
], CreateConceptIncrementalHiringDTO.prototype, "fteId", void 0);
exports.CreateConceptIncrementalHiringDTO = CreateConceptIncrementalHiringDTO;
//# sourceMappingURL=createConceptIncrementalHiring.dto.js.map