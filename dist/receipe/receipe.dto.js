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
exports.ReceipeDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
const person_1 = require("../shared/person");
class ReceipeDTO {
}
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Receipe Id' }),
    __metadata("design:type", String)
], ReceipeDTO.prototype, "receipeId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Receipe Name' }),
    __metadata("design:type", String)
], ReceipeDTO.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Receipe Description' }),
    __metadata("design:type", String)
], ReceipeDTO.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Date of Receipe to display' }),
    __metadata("design:type", Date)
], ReceipeDTO.prototype, "receipeDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Prep time in minutes' }),
    __metadata("design:type", Number)
], ReceipeDTO.prototype, "prepTimeMinutes", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Cook time in minutes' }),
    __metadata("design:type", Number)
], ReceipeDTO.prototype, "cookTimeMinutes", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Total time in minutes' }),
    __metadata("design:type", Number)
], ReceipeDTO.prototype, "totalTimeMinutes", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '# of Servings' }),
    __metadata("design:type", Number)
], ReceipeDTO.prototype, "servings", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Author' }),
    __metadata("design:type", person_1.PersonV1DTO)
], ReceipeDTO.prototype, "person", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Author Person Id' }),
    __metadata("design:type", String)
], ReceipeDTO.prototype, "personId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Receipe Steps' }),
    __metadata("design:type", Array)
], ReceipeDTO.prototype, "steps", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Receipe Ingredients' }),
    __metadata("design:type", Array)
], ReceipeDTO.prototype, "ingredients", void 0);
exports.ReceipeDTO = ReceipeDTO;
//# sourceMappingURL=receipe.dto.js.map