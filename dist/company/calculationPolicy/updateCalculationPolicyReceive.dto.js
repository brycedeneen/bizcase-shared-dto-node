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
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateCalculationPolicyReceiveDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
const calculation_1 = require("../../enums/calculation");
const company_1 = require("../../enums/company");
class UpdateCalculationPolicyReceiveDTO {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        default: calculation_1.ReceiveActionTypeENUM.CHANGETOPAYROLLCODE,
        description: `The action taken when all qualifiers are met for this Calculation Policy Detail: ${JSON.stringify(calculation_1.ReceiveActionTypeENUM)}`,
    }),
    __metadata("design:type", typeof (_a = typeof calculation_1.ReceiveActionTypeENUM !== "undefined" && calculation_1.ReceiveActionTypeENUM) === "function" ? _a : Object)
], UpdateCalculationPolicyReceiveDTO.prototype, "receiveAction", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The Payroll Code id associated with this calculation policy receive',
    }),
    __metadata("design:type", String)
], UpdateCalculationPolicyReceiveDTO.prototype, "payrollCodeId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        default: calculation_1.ReceiveActionTypeENUM.CHANGETOPAYROLLCODE,
        description: 'The amount that will be received (if applicable). EX: reeive an extra 8 hours when working 7 consecutive days',
    }),
    __metadata("design:type", Number)
], UpdateCalculationPolicyReceiveDTO.prototype, "amount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        default: company_1.HoursOrDollarsTypeCode.HOURS,
        description: 'The unit associated with the receive (if applicable)',
    }),
    __metadata("design:type", typeof (_b = typeof company_1.HoursOrDollarsTypeCode !== "undefined" && company_1.HoursOrDollarsTypeCode) === "function" ? _b : Object)
], UpdateCalculationPolicyReceiveDTO.prototype, "unit", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The order of this receive (ex receive an extra 8 worked hours might cause an extra calculation)',
    }),
    __metadata("design:type", Number)
], UpdateCalculationPolicyReceiveDTO.prototype, "order", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Effective date of this record' }),
    __metadata("design:type", String)
], UpdateCalculationPolicyReceiveDTO.prototype, "effectiveDate", void 0);
exports.UpdateCalculationPolicyReceiveDTO = UpdateCalculationPolicyReceiveDTO;
//# sourceMappingURL=updateCalculationPolicyReceive.dto.js.map