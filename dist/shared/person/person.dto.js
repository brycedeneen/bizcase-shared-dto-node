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
exports.PersonDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
class PersonDTO {
}
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Person Id' }),
    __metadata("design:type", String)
], PersonDTO.prototype, "personId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Full Name of the person' }),
    __metadata("design:type", String)
], PersonDTO.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Is this person active',
    }),
    __metadata("design:type", Boolean)
], PersonDTO.prototype, "isActive", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'When this record goes into effect',
        format: 'yyyy-MM-dd',
    }),
    __metadata("design:type", String)
], PersonDTO.prototype, "effectiveDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Effective dated records',
        isArray: true,
        required: false,
    }),
    __metadata("design:type", Array)
], PersonDTO.prototype, "effectiveDatedRecords", void 0);
exports.PersonDTO = PersonDTO;
//# sourceMappingURL=person.dto.js.map