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
exports.TimeSegmentWeekSegmentDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
class TimeSegmentWeekSegmentDTO {
    constructor() {
        this.inToOutSegments = [];
    }
}
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The week segment lookup key',
    }),
    __metadata("design:type", String)
], TimeSegmentWeekSegmentDTO.prototype, "weekSegmentKey", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The week start date',
    }),
    __metadata("design:type", Date)
], TimeSegmentWeekSegmentDTO.prototype, "startDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The week end date',
    }),
    __metadata("design:type", Date)
], TimeSegmentWeekSegmentDTO.prototype, "endDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The payroll in to out segments associated with this week',
    }),
    __metadata("design:type", Array)
], TimeSegmentWeekSegmentDTO.prototype, "inToOutSegments", void 0);
exports.TimeSegmentWeekSegmentDTO = TimeSegmentWeekSegmentDTO;
//# sourceMappingURL=weekSegment.dto.js.map