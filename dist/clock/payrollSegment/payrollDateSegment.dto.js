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
exports.PayrollDateSegmentDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
class PayrollDateSegmentDTO {
    constructor() {
        this.payrollSegments = [];
    }
}
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'A string key to identify the payroll date of this payroll date segment (ex: "2022-01-02")',
    }),
    __metadata("design:type", String)
], PayrollDateSegmentDTO.prototype, "payrollDateKey", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'The start date of this payroll period' }),
    __metadata("design:type", Date)
], PayrollDateSegmentDTO.prototype, "payrollDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The list of payroll segments included in this payroll date',
        isArray: true,
    }),
    __metadata("design:type", Array)
], PayrollDateSegmentDTO.prototype, "payrollSegments", void 0);
exports.PayrollDateSegmentDTO = PayrollDateSegmentDTO;
//# sourceMappingURL=payrollDateSegment.dto.js.map