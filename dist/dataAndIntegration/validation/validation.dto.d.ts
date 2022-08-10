import { ValidationFieldDetailDTO } from './validationFieldDetail.dto';
import { ValidationMessageDTO } from './validationMessage.dto';
export declare class RecordValidationDTO {
    recordIndex: number;
    validationMessages: ValidationMessageDTO[];
    validationFieldDetails: ValidationFieldDetailDTO[];
    notesOrAdditionalDetails: string;
    isValid: boolean;
}
export interface IRecordValidationDTO extends RecordValidationDTO {
}
