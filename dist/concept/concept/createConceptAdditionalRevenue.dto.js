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
exports.CreateConceptAdditionalRevenueDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
class CreateConceptAdditionalRevenueDTO {
}
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Name or title of the additional revenue', example: 'White label licensing fees' }),
    __metadata("design:type", String)
], CreateConceptAdditionalRevenueDTO.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'The total estimated additional revenue for year  1', example: 1000000 }),
    __metadata("design:type", Number)
], CreateConceptAdditionalRevenueDTO.prototype, "additionalRevenueY1", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'The total estimated additional revenue for year  2', example: 2000000 }),
    __metadata("design:type", Number)
], CreateConceptAdditionalRevenueDTO.prototype, "additionalRevenueY2", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'The total estimated additional revenue for year  3', example: 4000000 }),
    __metadata("design:type", Number)
], CreateConceptAdditionalRevenueDTO.prototype, "additionalRevenueY3", void 0);
exports.CreateConceptAdditionalRevenueDTO = CreateConceptAdditionalRevenueDTO;
//# sourceMappingURL=createConceptAdditionalRevenue.dto.js.map