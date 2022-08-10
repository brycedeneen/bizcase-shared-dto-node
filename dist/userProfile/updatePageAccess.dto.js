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
exports.UpdatePageAccessDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
class UpdatePageAccessDTO {
}
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Page Identifier' }),
    __metadata("design:type", String)
], UpdatePageAccessDTO.prototype, "pageIdentifier", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'If the user has accessed this page. Used for Guides',
    }),
    __metadata("design:type", Boolean)
], UpdatePageAccessDTO.prototype, "hasAccessedPage", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Version of the page that was last accessed' }),
    __metadata("design:type", Number)
], UpdatePageAccessDTO.prototype, "version", void 0);
exports.UpdatePageAccessDTO = UpdatePageAccessDTO;
//# sourceMappingURL=updatePageAccess.dto.js.map