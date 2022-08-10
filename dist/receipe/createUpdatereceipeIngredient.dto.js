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
exports.CreateUpdateReceipeIngredientDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
const receipe_1 = require("../enums/receipe");
class CreateUpdateReceipeIngredientDTO {
}
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Ingredient Name' }),
    __metadata("design:type", String)
], CreateUpdateReceipeIngredientDTO.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Ingredient Amount' }),
    __metadata("design:type", Number)
], CreateUpdateReceipeIngredientDTO.prototype, "amount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Unit of Meausure' }),
    __metadata("design:type", String)
], CreateUpdateReceipeIngredientDTO.prototype, "receipeUnitOfMeasure", void 0);
exports.CreateUpdateReceipeIngredientDTO = CreateUpdateReceipeIngredientDTO;
//# sourceMappingURL=createUpdatereceipeIngredient.dto.js.map