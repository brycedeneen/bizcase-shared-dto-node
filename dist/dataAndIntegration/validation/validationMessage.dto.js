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
exports.ValidationMessageDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
const dataAndIntegration_1 = require("../../enums/dataAndIntegration");
const validationCode_enum_1 = require("../../enums/dataAndIntegration/validation/validationCode.enum");
class ValidationMessageDTO {
    static getValidationMessage(validationCode) {
        let validationMessage = 'Unknown validation code';
        switch (validationCode) {
            case validationCode_enum_1.ValidationCodeENUM.LONGITUDEISNAN:
                validationMessage = `Longitude was provided, but is not a valid numeric value`;
                break;
            case validationCode_enum_1.ValidationCodeENUM.LONGITUDEISBLANK:
                validationMessage = `Longitude is blank, but is a required value`;
                break;
            case validationCode_enum_1.ValidationCodeENUM.LATITUDEISNAN:
                validationMessage = `Latitude was provided, but is not a valid numeric value`;
                break;
            case validationCode_enum_1.ValidationCodeENUM.LATITUDEISBLANK:
                validationMessage = `Latitude is blank, but is a required value`;
                break;
            case validationCode_enum_1.ValidationCodeENUM.SOURCEPUNCHDATETIMEISBLANK:
                validationMessage = `Source punch date time is blank but is a required field`;
                break;
            case validationCode_enum_1.ValidationCodeENUM.PUNCHTYPEISBLANK:
                validationMessage = `Punchtype is blank, but is a required value`;
                break;
            case validationCode_enum_1.ValidationCodeENUM.PUNCHTYPEISINVALID:
                validationMessage = `Punchtype is invalid or disabled for this employee's policies`;
                break;
            case validationCode_enum_1.ValidationCodeENUM.EMPLOYEENOTFOUND:
                validationMessage = `No matching employee was found`;
                break;
            case validationCode_enum_1.ValidationCodeENUM.SOURCEPUNCHDATETIMEISINVALD:
                validationMessage = `Source punch date time is invalid`;
                break;
            case validationCode_enum_1.ValidationCodeENUM.PUNCHDATETIMEIGNORED:
                validationMessage = `Punch Date Time was ignored. This value can only be imported by an administrator, for testing, or submitted as a punch correction or missing punch`;
                break;
            default:
                break;
        }
        return validationMessage;
    }
}
__decorate([
    (0, swagger_1.ApiProperty)({
        required: true,
        description: `The Validation Level of this record or value: ${JSON.stringify(dataAndIntegration_1.ValidationLevelENUM)}`,
    }),
    __metadata("design:type", String)
], ValidationMessageDTO.prototype, "validationLevel", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: true,
        description: 'The validation code associated with this error',
    }),
    __metadata("design:type", String)
], ValidationMessageDTO.prototype, "validationCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: true,
        description: 'The validation message associated with this error',
    }),
    __metadata("design:type", String)
], ValidationMessageDTO.prototype, "validationMessage", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: true,
        description: 'Any notes or additional details associated with this validation message',
    }),
    __metadata("design:type", String)
], ValidationMessageDTO.prototype, "notesOrAdditionalDetails", void 0);
exports.ValidationMessageDTO = ValidationMessageDTO;
//# sourceMappingURL=validationMessage.dto.js.map