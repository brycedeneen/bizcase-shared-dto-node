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
exports.PayrollCodeGroupDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
class PayrollCodeGroupDTO {
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], PayrollCodeGroupDTO.prototype, "payrollCodeGroupId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: true,
        description: 'The name of the PayrollCodeGroup',
    }),
    __metadata("design:type", String)
], PayrollCodeGroupDTO.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: true,
        description: 'The description of this PayrollCodeGroup',
    }),
    __metadata("design:type", String)
], PayrollCodeGroupDTO.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Is this PayrollCodeGroup active',
    }),
    __metadata("design:type", Boolean)
], PayrollCodeGroupDTO.prototype, "isActive", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], PayrollCodeGroupDTO.prototype, "companyId", void 0);
exports.PayrollCodeGroupDTO = PayrollCodeGroupDTO;
//# sourceMappingURL=payrollCodeGroup.dto.js.map