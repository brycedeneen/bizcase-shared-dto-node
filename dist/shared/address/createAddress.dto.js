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
exports.CreateAddressDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
const shared_1 = require("../../enums/shared");
class CreateAddressDTO {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        required: true,
        description: `Address Type Values ${JSON.stringify(shared_1.AddressTypeENUM)}`,
    }),
    __metadata("design:type", String)
], CreateAddressDTO.prototype, "addressType", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: true,
        description: `Line 1 of this address`,
    }),
    __metadata("design:type", String)
], CreateAddressDTO.prototype, "line1", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: true,
        description: `Line 2 of this address, often suite, appartment number, etc`,
    }),
    __metadata("design:type", String)
], CreateAddressDTO.prototype, "line2", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: true,
        description: `City, village, settlment, etc`,
    }),
    __metadata("design:type", String)
], CreateAddressDTO.prototype, "locality", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: true,
        description: `Region or State (can be state code ex: FL or full state name ex: Florida)`,
    }),
    __metadata("design:type", String)
], CreateAddressDTO.prototype, "regionOrState", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: true,
        description: `Postal code or zipcode`,
    }),
    __metadata("design:type", String)
], CreateAddressDTO.prototype, "postalCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: true,
        description: `The iso country code`,
    }),
    __metadata("design:type", String)
], CreateAddressDTO.prototype, "countryISOCode", void 0);
exports.CreateAddressDTO = CreateAddressDTO;
//# sourceMappingURL=createAddress.dto.js.map