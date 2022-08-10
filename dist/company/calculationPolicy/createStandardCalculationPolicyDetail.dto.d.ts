import { StandardCalculationPolicyRuleENUM } from '../../enums/company';
export declare class CreateStandardCalculationPolicyDetailDTO {
    name: string;
    description: string;
    order: number;
    effectiveDate: string;
    standardCalculationPolicyRule: StandardCalculationPolicyRuleENUM;
}
export interface ICreateStandardCalculationPolicyDetailDTO extends CreateStandardCalculationPolicyDetailDTO {
}
