import { QualifierTypeENUM } from '../../enums/calculation';
export declare class CreateCalculationPolicyQualifierDTO {
    qualifierType: QualifierTypeENUM;
    qualifierValue: number;
    order: number;
    effectiveDate: string;
}
export interface ICreateCalculationPolicyQualifierDTO extends CreateCalculationPolicyQualifierDTO {
}
