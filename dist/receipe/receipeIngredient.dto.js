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
exports.ReceipeIngredientDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
const receipe_1 = require("../enums/receipe");
class ReceipeIngredientDTO {
}
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Receipe Ingredient Id' }),
    __metadata("design:type", String)
], ReceipeIngredientDTO.prototype, "receipeIngredientId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Ingredient Name' }),
    __metadata("design:type", String)
], ReceipeIngredientDTO.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Ingredient Amount' }),
    __metadata("design:type", Number)
], ReceipeIngredientDTO.prototype, "amount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Unit of Meausure' }),
    __metadata("design:type", String)
], ReceipeIngredientDTO.prototype, "receipeUnitOfMeasure", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Receipe Id' }),
    __metadata("design:type", String)
], ReceipeIngredientDTO.prototype, "receipeId", void 0);
exports.ReceipeIngredientDTO = ReceipeIngredientDTO;
//# sourceMappingURL=receipeIngredient.dto.js.map