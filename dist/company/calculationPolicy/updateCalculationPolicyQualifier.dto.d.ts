import { QualifierTypeENUM } from '../../enums/calculation';
export declare class UpdateCalculationPolicyQualifierDTO {
    qualifierType: QualifierTypeENUM;
    qualifierValue: number;
    order: number;
    effectiveDate: string;
}
export interface IUpdateCalculationPolicyQualifierDTO extends UpdateCalculationPolicyQualifierDTO {
}
