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
exports.CreateReceipeDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
class CreateReceipeDTO {
}
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Receipe Name' }),
    __metadata("design:type", String)
], CreateReceipeDTO.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Receipe Description' }),
    __metadata("design:type", String)
], CreateReceipeDTO.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Date of Receipe to display' }),
    __metadata("design:type", Date)
], CreateReceipeDTO.prototype, "receipeDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Prep time in minutes' }),
    __metadata("design:type", Number)
], CreateReceipeDTO.prototype, "prepTimeMinutes", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Cook time in minutes' }),
    __metadata("design:type", Number)
], CreateReceipeDTO.prototype, "cookTimeMinutes", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Total time in minutes' }),
    __metadata("design:type", Number)
], CreateReceipeDTO.prototype, "totalTimeMinutes", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '# of Servings' }),
    __metadata("design:type", Number)
], CreateReceipeDTO.prototype, "servings", void 0);
exports.CreateReceipeDTO = CreateReceipeDTO;
//# sourceMappingURL=createReceipe.dto.js.map