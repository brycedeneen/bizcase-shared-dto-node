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
exports.RecordValidationDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
class RecordValidationDTO {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        required: false,
        description: 'The index of this record (used if an array of records are provided)',
    }),
    __metadata("design:type", Number)
], RecordValidationDTO.prototype, "recordIndex", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: true,
        description: 'The validation messages associated with this record',
    }),
    __metadata("design:type", Array)
], RecordValidationDTO.prototype, "validationMessages", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: true,
        description: 'The validation messages associated with the fields in this record',
    }),
    __metadata("design:type", Array)
], RecordValidationDTO.prototype, "validationFieldDetails", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: true,
        description: 'Any notes or additional details associated with this record',
    }),
    __metadata("design:type", String)
], RecordValidationDTO.prototype, "notesOrAdditionalDetails", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Did this record pass validation',
    }),
    __metadata("design:type", Boolean)
], RecordValidationDTO.prototype, "isValid", void 0);
exports.RecordValidationDTO = RecordValidationDTO;
//# sourceMappingURL=validation.dto.js.map