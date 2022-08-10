import { ValidationMessageDTO } from './validationMessage.dto';
export declare class ValidationFieldDetailDTO {
    fieldName: string;
    fieldValue: any;
    validationMessages: ValidationMessageDTO[];
    notesOrAdditionalDetails: string;
    isValid: boolean;
}
export interface IValidationFieldDetailDTO extends ValidationFieldDetailDTO {
}
