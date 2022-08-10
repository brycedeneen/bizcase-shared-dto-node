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
exports.CreateIntegrationMappingDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
const dataAndIntegration_1 = require("../../enums/dataAndIntegration");
class CreateIntegrationMappingDTO {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        required: true,
        description: `The Data Object related to this configuration  ${JSON.stringify(dataAndIntegration_1.DataObjectENUM)}`,
    }),
    __metadata("design:type", String)
], CreateIntegrationMappingDTO.prototype, "dataObject", void 0);
exports.CreateIntegrationMappingDTO = CreateIntegrationMappingDTO;
//# sourceMappingURL=createIntegrationMapping.dto.js.map