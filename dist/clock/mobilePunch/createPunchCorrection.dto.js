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
exports.CreatePunchCorrectionDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
const clock_1 = require("../../enums/clock");
class CreatePunchCorrectionDTO {
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Date)
], CreatePunchCorrectionDTO.prototype, "punchDateTime", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Boolean)
], CreatePunchCorrectionDTO.prototype, "isMissingPunch", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Boolean)
], CreatePunchCorrectionDTO.prototype, "isPunchCorrection", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        default: clock_1.PunchTypeENUM.SWIPEANDGO,
        description: `Punch Type: ${JSON.stringify(clock_1.PunchTypeENUM)}`,
    }),
    __metadata("design:type", String)
], CreatePunchCorrectionDTO.prototype, "punchType", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The id for the employee',
    }),
    __metadata("design:type", String)
], CreatePunchCorrectionDTO.prototype, "employeeId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The id for the employee',
    }),
    __metadata("design:type", String)
], CreatePunchCorrectionDTO.prototype, "userId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The id for the employees company',
    }),
    __metadata("design:type", String)
], CreatePunchCorrectionDTO.prototype, "companyId", void 0);
exports.CreatePunchCorrectionDTO = CreatePunchCorrectionDTO;
//# sourceMappingURL=createPunchCorrection.dto.js.map