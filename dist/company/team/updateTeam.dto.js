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
exports.UpdateTeamDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
class UpdateTeamDTO {
}
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Name of the team' }),
    __metadata("design:type", String)
], UpdateTeamDTO.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The percentage of time the team is allocated to development, usually about 80%. Use decimals to represent percent (aka 0.75 = 75%)',
        example: 0.8,
        default: 0.8,
    }),
    __metadata("design:type", Number)
], UpdateTeamDTO.prototype, "percentAllocatedToDevelopment", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The percentage of development time the team is allocated to working on prioritized concepts. Use decimals to represent percent (aka 0.75 = 75%)',
        example: 0.75,
        default: 0.5,
    }),
    __metadata("design:type", Number)
], UpdateTeamDTO.prototype, "percentAllocatedToPrioritizedConcepts", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The percentage of the year the team is active and ramped up. If your teams take 3 months to ramp up, will start April 1st, and your Development cycle runs 1/1 to 12/31, then you would use 50%. Use decimals to represent percent (aka 0.75 = 75%)',
        example: 1.0,
        default: 1,
    }),
    __metadata("design:type", Number)
], UpdateTeamDTO.prototype, "percentOfYearTeamIsActive", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The fully loaded cost per development week (product, marketing, development, etc)',
        example: 2500,
    }),
    __metadata("design:type", Object)
], UpdateTeamDTO.prototype, "overrideConceptDevelopmentWeekCost", void 0);
exports.UpdateTeamDTO = UpdateTeamDTO;
//# sourceMappingURL=updateTeam.dto.js.map