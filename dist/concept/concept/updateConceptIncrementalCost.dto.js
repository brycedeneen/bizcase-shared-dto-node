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
exports.UpdateConceptIncrementalCostDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
class UpdateConceptIncrementalCostDTO {
}
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Name or title of the incremental cost' }),
    __metadata("design:type", String)
], UpdateConceptIncrementalCostDTO.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Description of the incremental cost' }),
    __metadata("design:type", String)
], UpdateConceptIncrementalCostDTO.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Incremental Costs in Year 1' }),
    __metadata("design:type", Number)
], UpdateConceptIncrementalCostDTO.prototype, "incrementalCostY1", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Incremental Costs in Year 2' }),
    __metadata("design:type", Number)
], UpdateConceptIncrementalCostDTO.prototype, "incrementalCostY2", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Incremental Costs in Year 3' }),
    __metadata("design:type", Number)
], UpdateConceptIncrementalCostDTO.prototype, "incrementalCostY3", void 0);
exports.UpdateConceptIncrementalCostDTO = UpdateConceptIncrementalCostDTO;
//# sourceMappingURL=updateConceptIncrementalCost.dto.js.map