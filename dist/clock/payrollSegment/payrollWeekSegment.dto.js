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
exports.PayrollWeekSegmentDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
class PayrollWeekSegmentDTO {
    constructor() {
        this.payrollDateSegments = [];
    }
}
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'A string key to identify the start date of this payroll week segment (ex: "2022-01-02")',
    }),
    __metadata("design:type", String)
], PayrollWeekSegmentDTO.prototype, "startDateKey", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'The start date of this payroll week' }),
    __metadata("design:type", Date)
], PayrollWeekSegmentDTO.prototype, "startDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'The last day/date of this payroll week' }),
    __metadata("design:type", Date)
], PayrollWeekSegmentDTO.prototype, "endDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The list of payroll date segments included in this payroll week',
        isArray: true,
    }),
    __metadata("design:type", Array)
], PayrollWeekSegmentDTO.prototype, "payrollDateSegments", void 0);
exports.PayrollWeekSegmentDTO = PayrollWeekSegmentDTO;
//# sourceMappingURL=payrollWeekSegment.dto.js.map