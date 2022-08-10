import { ValidationLevelENUM } from '../../enums/dataAndIntegration';
import { ValidationCodeENUM } from '../../enums/dataAndIntegration/validation/validationCode.enum';
export declare class ValidationMessageDTO {
    validationLevel: ValidationLevelENUM;
    validationCode: ValidationCodeENUM;
    validationMessage: string;
    notesOrAdditionalDetails: string;
    static getValidationMessage(validationCode: ValidationCodeENUM): string;
}
export interface IValidationMessageDTO extends ValidationMessageDTO {
}
