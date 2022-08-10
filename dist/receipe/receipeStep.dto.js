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
exports.ReceipeStepDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
class ReceipeStepDTO {
}
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Receipe Step Id' }),
    __metadata("design:type", String)
], ReceipeStepDTO.prototype, "receipeStepId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Receipe Step Name' }),
    __metadata("design:type", String)
], ReceipeStepDTO.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Receipe Step Description' }),
    __metadata("design:type", String)
], ReceipeStepDTO.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Order of Receipe Step' }),
    __metadata("design:type", Number)
], ReceipeStepDTO.prototype, "order", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Receipe Id' }),
    __metadata("design:type", String)
], ReceipeStepDTO.prototype, "receipeId", void 0);
exports.ReceipeStepDTO = ReceipeStepDTO;
//# sourceMappingURL=receipeStep.dto.js.map